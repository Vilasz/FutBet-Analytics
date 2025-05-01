'use client';

import { useState } from 'react';
import { Check, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    monthly: 0,
    yearly: 0,
    cta: 'Começar',
    features: [
      'Odd-scanner em 1 liga',
      '2 relatórios por semana',
      'Suporte comunitário',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    monthly: 49,
    yearly: 499,
    cta: 'Assinar Pro',
    features: [
      'Todas as ligas principais',
      'Relatórios diários',
      'Modelos de probabilidade pré-jogo',
      'Suporte prioritário',
    ],
    highlight: true,
  },
  {
    id: 'elite',
    name: 'Elite',
    monthly: 129,
    yearly: 1290,
    cta: 'Assinar Elite',
    features: [
      'Ligas globais + campeonatos secundários',
      'Análises em tempo real',
      'API para integrações',
      'Consultoria 1-a-1 mensal',
    ],
  },
];

export default function PricingSection() {
  const [cycle, setCycle] = useState('monthly');
  const formatPrice = (value) =>
    value === 0 ? 'Grátis' : `R$${value.toLocaleString('pt-BR')}`;

  return (
    <>
      <Header />

      <section className="bg-gray-900 pt-20 pb-36">
        <div className="container mx-auto px-6 md:px-0 text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Planos & Preços
          </h1>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Comece grátis ou eleve suas apostas com recursos profissionais.
          </p>

          {/* Toggle Tabs */}
          <div className="mt-8 inline-flex rounded-full bg-gray-800 p-1 shadow-sm">
            {['monthly', 'yearly'].map((opt) => (
              <button
                key={opt}
                onClick={() => setCycle(opt)}
                className={`px-5 py-2 rounded-full font-medium transition
                  ${
                    cycle === opt
                      ? 'bg-blue-500 text-gray-900'
                      : 'text-gray-300 hover:text-white'
                  }`}
              >
                {opt === 'monthly' ? 'Mensal' : 'Anual (-15%)'}
              </button>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-0 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col justify-between rounded-3xl border border-gray-700 bg-gray-800 p-8 transition-transform hover:-translate-y-2 hover:shadow-2xl
                ${plan.highlight ? 'ring-2 ring-blue-500' : ''}`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 right-6 flex items-center gap-1 rounded-full bg-blue-500 px-3 py-1 text-xs font-bold text-gray-900 shadow-md">
                  <Star className="h-4 w-4 fill-current" /> Popular
                </div>
              )}

              {/* Title & Price */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-blue-400">
                    {formatPrice(plan[cycle])}
                  </span>
                  {plan[cycle] !== 0 && (
                    <span className="text-gray-400 text-lg">
                      /{cycle === 'monthly' ? 'mês' : 'ano'}
                    </span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="mt-6 space-y-3 flex-grow text-gray-300">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                disabled={plan.monthly === 0 && cycle === 'monthly'}
                className={`mt-8 w-full py-3 rounded-full font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-500
                  ${plan.highlight
                    ? 'bg-blue-500 text-gray-900 hover:bg-blue-600'
                    : 'bg-gray-700 text-white hover:bg-gray-600'} disabled:opacity-60 disabled:cursor-not-allowed`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
