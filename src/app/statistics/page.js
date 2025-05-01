'use client';

/**
 * Futbet Analytics — Advanced Betting Dashboard (DEMO)
 * Página EXTENSA com dados fictícios para auxiliar na identificação
 * de valor em apostas de futebol. Inclui múltiplas visualizações Recharts.
 *
 * ➜ Dependência: npm i recharts
 */

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from 'recharts';
import { Goal, Users, Target, TrendingUp, Lightbulb } from 'lucide-react';
import { useState, useMemo } from 'react';

/* ─────────────────────────── 1. MOCK DATA ─────────────────────────── */
/** Jogadores (últimos 5 jogos) */
const players = [
  {
    id: 1,
    name: 'Gabriel Monteiro',
    team: 'São Paulo FC',
    position: 'Atacante',
    last5: [
      { vs: 'Santos', goals: 2, xg: 1.8, sot: 4 },
      { vs: 'Flamengo', goals: 1, xg: 0.9, sot: 3 },
      { vs: 'Corinthians', goals: 0, xg: 0.2, sot: 1 },
      { vs: 'Palmeiras', goals: 1, xg: 0.7, sot: 2 },
      { vs: 'Goiás', goals: 2, xg: 1.6, sot: 5 },
    ],
  },
  {
    id: 2,
    name: 'Lucas Almeida',
    team: 'Fluminense',
    position: 'Meia',
    last5: [
      { vs: 'Botafogo', goals: 0, xg: 0.1, sot: 1 },
      { vs: 'Colo‑Colo', goals: 1, xg: 0.6, sot: 2 },
      { vs: 'Grêmio', goals: 0, xg: 0.2, sot: 1 },
      { vs: 'Vasco', goals: 1, xg: 0.5, sot: 2 },
      { vs: 'Cruzeiro', goals: 0, xg: 0.3, sot: 1 },
    ],
  },
  {
    id: 3,
    name: 'Diego Fernández',
    team: 'River Plate',
    position: 'Atacante',
    last5: [
      { vs: 'Boca', goals: 1, xg: 0.8, sot: 3 },
      { vs: 'Racing', goals: 1, xg: 1.0, sot: 4 },
      { vs: 'Nacional', goals: 0, xg: 0.4, sot: 2 },
      { vs: 'Estudiantes', goals: 2, xg: 1.7, sot: 5 },
      { vs: 'Independiente', goals: 1, xg: 0.9, sot: 3 },
    ],
  },
];

/** Times (10 jogos) */
const teams = [
  { name: 'São Paulo FC', xg: 17.8, xga: 13.3, wins: 6, draws: 3, losses: 1 },
  { name: 'Fluminense', xg: 18.1, xga: 15.6, wins: 5, draws: 3, losses: 2 },
  { name: 'River Plate', xg: 20.4, xga: 11.2, wins: 7, draws: 2, losses: 1 },
];

/** Técnicos */
const coaches = [
  { name: 'Thiago Nunes', team: 'São Paulo FC', games: 48, win: 58, draw: 22, loss: 20 },
  { name: 'Fernando Diniz', team: 'Fluminense', games: 60, win: 55, draw: 18, loss: 27 },
  { name: 'Martín Demichelis', team: 'River Plate', games: 52, win: 61, draw: 21, loss: 18 },
];

/** Próximas partidas (valor esperado) */
const valuePicks = [
  { match: 'São Paulo x Santos', prob: 0.62, odds: 1.95 },
  { match: 'Fluminense x Vasco', prob: 0.58, odds: 2.10 },
  { match: 'River x Racing', prob: 0.69, odds: 1.80 },
  { match: 'Palmeiras x Corinthians', prob: 0.55, odds: 2.25 },
  { match: 'Boca x Independiente', prob: 0.51, odds: 2.40 },
];
valuePicks.forEach((m) => (m.ev = ((m.prob * m.odds - 1) * 100).toFixed(1)));

/* ───────────────────────── 2. HELPERS ───────────────────────── */
function Section({ title, children }) {
  return (
    <section className="container mx-auto px-6 md:px-0 py-16 space-y-8">
      <h2 className="text-3xl font-bold text-blue-400 mb-6">{title}</h2>
      {children}
    </section>
  );
}

function StatCard({ icon: Icon, label, value, color }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl bg-gray-800 p-4 shadow-lg w-28">
      <Icon className={`h-6 w-6 ${color}`} />
      <span className="text-xl font-extrabold text-white">{value}</span>
      <span className="text-xs text-gray-400 text-center whitespace-nowrap">{label}</span>
    </div>
  );
}

/* ───────────────────────── 3. PAGE ───────────────────────── */
export default function StatsAdvanced() {
  const [selectedPlayer, setSelectedPlayer] = useState(players[0]);

  /* ---- KPIs ---- */
  const playerKpis = useMemo(() => {
    const g = selectedPlayer.last5.reduce((a, x) => a + x.goals, 0);
    const x = selectedPlayer.last5.reduce((a, x) => a + x.xg, 0).toFixed(1);
    const s = selectedPlayer.last5.reduce((a, x) => a + x.sot, 0);
    return [
      { icon: TrendingUp, label: 'Gols', value: g, color: 'text-blue-400' },
      { icon: Target, label: 'xG', value: x, color: 'text-purple-400' },
      { icon: Goal, label: 'SOT', value: s, color: 'text-emerald-400' },
    ];
  }, [selectedPlayer]);

  /* Dados acumulados */
  const cumulativeData = useMemo(() => {
    let gAcc = 0,
      xAcc = 0;
    return selectedPlayer.last5.map((m) => {
      gAcc += m.goals;
      xAcc += m.xg;
      return { ...m, gAcc, xAcc: Number(xAcc.toFixed(2)) };
    });
  }, [selectedPlayer]);

  /* Pie SOT vs off */
  const pieData = useMemo(() => {
    const on = selectedPlayer.last5.reduce((a, x) => a + x.sot, 0);
    const off = selectedPlayer.last5.reduce((a, x) => a + Math.max(0, x.sot * 1.7 - x.sot), 0);
    return [
      { name: 'Fora', value: off },
      { name: 'No Gol', value: on },
    ];
  }, [selectedPlayer]);

  return (
    <>
      <Header />

      {/* HERO */}
      <div className="bg-gradient-to-br from-blue-900 via-gray-900 to-gray-800 pt-32 pb-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Betting Insights Avançados
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-lg px-6 md:px-0">
          Dashboards interativos com informações detalhadas de <span className="font-semibold text-blue-400">jogadores</span>, <span className="font-semibold text-blue-400">times</span> e <span className="font-semibold text-blue-400">técnicos</span>.
        </p>
      </div>

      {/* PLAYER SECTION */}
      <Section title="Forma Recente dos Jogadores (5 jogos)">
        {/* Picker */}
        <div className="flex flex-wrap gap-4 mb-8">
          {players.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedPlayer(p)}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition
                ${selectedPlayer.id === p.id ? 'bg-blue-500 text-gray-900 border-blue-500' : 'border-gray-700 text-gray-300 hover:bg-gray-800'}`}
            >
              <Goal className="h-4 w-4" />
              {p.name}
            </button>
          ))}
        </div>

        {/* KPIs */}
        <div className="flex gap-6 mb-8 flex-wrap">
          {playerKpis.map((k) => (
            <StatCard key={k.label} {...k} />
          ))}
        </div>

        {/* Charts grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Linha */}
          <div className="lg:col-span-2 h-72 rounded-2xl bggray-800 p-4 shadow-lg">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={selectedPlayer.last5}>
                <CartesianGrid stroke="#374151" strokeDasharray="3 3" />
                <XAxis dataKey="vs" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{ background: '#1f2937', border: 'none' }} />
                <Line type="monotone" dataKey="goals" name="Gols" stroke="#60a5fa" strokeWidth={3} />
                <Line type="monotone" dataKey="xg" name="xG" stroke="#f97316" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Pizza */}
          <div className="h-72 w-full rounded-2xl bg-gray-800 p-4 shadow-lg">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={40} outerRadius={70} label>
                  {pieData.map((_, idx) => (
                    <Cell key={idx} fill={idx === 1 ? '#60a5fa' : '#4b5563'} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ background: '#1f2937', border: 'none' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Área acumulada */}
          <div className="lg:col-span-3 h-72 rounded-2xl bg-gray-800 p-4 shadow-lg">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={cumulativeData}>
                <CartesianGrid stroke="#374151" strokeDasharray="3 3" />
                <XAxis dataKey="vs" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{ background: '#1f2937', border: 'none' }} />
                <Area type="monotone" dataKey="gAcc" name="Gols Ac." stackId="1" stroke="#60a5fa" fill="#60a5fa33" />
                <Area type="monotone" dataKey="xAcc" name="xG Ac." stackId="1" stroke="#f97316" fill="#f9731633" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Section>

      {/* TEAM SECTION */}
      <Section title="Comparativo de Equipes (10 jogos)">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Radar */}
          <div className="h-96 rounded-2xl bg-gray-800 p-4 shadow-lg">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={teams} outerRadius={90}>
                <PolarGrid stroke="#374151" />
                <PolarAngleAxis dataKey="name" stroke="#9ca3af" />
                <PolarRadiusAxis stroke="#374151" />
                <Radar name="xG" dataKey="xg" stroke="#60a5fa" fill="#60a5fa" fillOpacity={0.2} />
                <Radar name="xGA" dataKey="xga" stroke="#f97316" fill="#f97316" fillOpacity={0.2} />
                <Tooltip contentStyle={{ background: '#1f2937', border: 'none' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Stacked bars */}
          <div className="h-96 rounded-2xl bg-gray-800 p-4 shadow-lg">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={teams} stackOffset="sign">
                <CartesianGrid stroke="#374151" strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{ background: '#1f2937', border: 'none' }} />
                <Bar dataKey="wins" fill="#34d399" stackId="a" name="Vitórias" />
                <Bar dataKey="draws" fill="#facc15" stackId="a" name="Empates" />
                <Bar dataKey="losses" fill="#ef4444" stackId="a" name="Derrotas" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Section>

      {/* VALUE PICKS */}
      <Section title="Oportunidades de Valor (DEMO)">
        <div className="overflow-x-auto rounded-2xl border border-gray-700 shadow-lg">
          <table className="min-w-full divide-y divide-gray-700 text-sm">
            <thead className="bg-gray-800 text-gray-300">
              <tr>
                <th className="px-4 py-3 text-left">Partida</th>
                <th className="px-4 py-3">Prob. Model</th>
                <th className="px-4 py-3">Odds</th>
                <th className="px-4 py-3">EV %</th>
              </tr>
            </thead>
            <tbody className="bg-gray-900 divide-y divide-gray-800 text-gray-300">
              {valuePicks.map((m) => (
                <tr key={m.match} className="hover:bg-gray-800">
                  <td className="px-4 py-3 flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-amber-400" />
                    {m.match}
                  </td>
                  <td className="px-4 py-3 text-center">{(m.prob * 100).toFixed(0)}%</td>
                  <td className="px-4 py-3 text-center">{m.odds.toFixed(2)}</td>
                  <td className={`px-4 py-3 text-center ${m.ev >= 0 ? 'text-green-400' : 'text-red-400'}`}>{m.ev}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* COACHES */}
      <Section title="Desempenho dos Técnicos">
        <div className="overflow-x-auto rounded-2xl border border-gray-700 shadow-lg">
          <table className="min-w-full divide-y divide-gray-700 text-sm">
            <thead className="bg-gray-800 text-gray-300">
              <tr>
                <th className="px-4 py-3 text-left">Técnico</th>
                <th className="px-4 py-3">Equipe</th>
                <th className="px-4 py-3">Jogos</th>
                <th className="px-4 py-3">Vit%</th>
                <th className="px-4 py-3">Emp%</th>
                <th className="px-4 py-3">Der%</th>
              </tr>
            </thead>
            <tbody className="bg-gray-900 divide-y divide-gray-800 text-gray-300">
              {coaches.map((c) => {
                const w = ((c.win / c.games) * 100).toFixed(1);
                const d = ((c.draw / c.games) * 100).toFixed(1);
                const l = ((c.loss / c.games) * 100).toFixed(1);
                return (
                  <tr key={c.name} className="hover:bg-gray-800">
                    <td className="px-4 py-3 flex items-center gap-2"><Users className="h-4 w-4 text-blue-400" /> {c.name}</td>
                    <td className="px-4 py-3 text-center">{c.team}</td>
                    <td className="px-4 py-3 text-center">{c.games}</td>
                    <td className="px-4 py-3 text-center text-green-400">{w}%</td>
                    <td className="px-4 py-3 text-center text-yellow-300">{d}%</td>
                    <td className="px-4 py-3 text-center text-red-400">{l}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Section>

      <Footer />
    </>
  );
}
