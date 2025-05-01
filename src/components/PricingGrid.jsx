"use client";

import { useState } from "react";
import { Check, Star } from "lucide-react";

const plans = [
  {
    id: "starter",
    name: "Starter",
    monthly: 0,
    yearly: 0,
    cta: "Começar",
    features: [
      "Odd-scanner em 1 liga",
      "2 relatórios por semana",
      "Suporte comunitário",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    monthly: 49,
    yearly: 499,
    cta: "Assinar Pro",
    features: [
      "Todas as ligas principais",
      "Relatórios diários",
      "Modelos de probabilidade pré-jogo",
      "Suporte prioritário",
    ],
    highlight: true,
  },
  {
    id: "elite",
    name: "Elite",
    monthly: 129,
    yearly: 1290,
    cta: "Assinar Elite",
    features: [
      "Ligas globais + campeonatos secundários",
      "Análises em tempo real",
      "API para integrações",
      "Consultoria 1-a-1 mensal",
    ],
  },
];

export default function PricingGrid() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const toggleCycle = () =>
    setBillingCycle((c) => (c === "monthly" ? "yearly" : "monthly"));
  const fmt = (v) => (v === 0 ? "Grátis" : `R$${v.toLocaleString("pt-BR")}`);

  return (
    <>
      {/* Hero + toggle */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-blue-900 via-gray-900 to-gray-800 pt-40 pb-28 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Planos & Preços
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-gray-300 text-lg">
          Comece grátis ou eleve suas apostas com recursos profissionais.
        </p>
        <div className="mt-10 flex justify-center items-center gap-4">
          <span
            className={
              billingCycle === "monthly"
                ? "text-blue-400 font-medium"
                : "text-gray-400"
            }
          >
            Mensal
          </span>
          <button
            onClick={toggleCycle}
            className="relative inline-flex h-6 w-12 cursor-pointer rounded-full bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span
              className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-blue-500 shadow transition-transform ${
                billingCycle === "yearly" ? "translate-x-6" : ""
              }`}
            />
          </button>
          <span
            className={
              billingCycle === "yearly"
                ? "text-blue-400 font-medium"
                : "text-gray-400"
            }
          >
            Anual (-15%)
          </span>
        </div>
      </section>

      {/* Grid */}
      <section className="relative z-10 bg-gray-900 pb-36">
        <div className="container mx-auto px-6 md:px-0 -mt-32 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`group relative flex flex-col rounded-3xl border border-gray-700/60 bg-gray-800/60 p-8 backdrop-blur-lg shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl ${
                plan.highlight ? "ring-2 ring-blue-500" : ""
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 right-6 flex items-center gap-1 rounded-full bg-blue-500 px-3 py-1 text-xs font-bold uppercase text-gray-900 shadow-lg">
                  <Star className="h-4 w-4 fill-current" /> Popular
                </span>
              )}

              <h3 className="mb-4 text-2xl font-bold text-white">
                {plan.name}
              </h3>

              <div className="mb-8 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-blue-400">
                  {fmt(plan[billingCycle])}
                </span>
                {plan[billingCycle] !== 0 && (
                  <span className="text-gray-400 text-lg font-medium">
                    /{billingCycle === "monthly" ? "mês" : "ano"}
                  </span>
                )}
              </div>

              <ul className="space-y-3 flex-1">
                {plan.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <Check className="h-5 w-5 flex-shrink-0 text-blue-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-10 w-full rounded-full py-3 font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  plan.highlight
                    ? "bg-blue-500 text-gray-900 hover:bg-blue-600"
                    : "bg-gray-700 text-white hover:bg-gray-600"
                }`}
                disabled={plan.monthly === 0 && billingCycle === "monthly"}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
