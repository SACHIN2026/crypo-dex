"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Ban, HeadphonesIcon } from 'lucide-react'

const features = [
  {
    name: 'Cheapest TX',
    description: 'Minimal transaction fees and maximum efficiency for your trades.',
    icon: Zap,
  },
  {
    name: 'SAFU',
    description: 'Security and safety protocols to protect your assets.',
    icon: Shield,
  },
  {
    name: 'No Contract Risk',
    description: 'Fully audited smart contracts for peace of mind.',
    icon: Ban,
  },
  {
    name: 'Onchain Support',
    description: '24/7 support for all your trading needs.',
    icon: HeadphonesIcon,
  },
]

export function Features() {
  return (
    <div className="py-24 sm:py-32" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our <span className="text-yellow-400">Features</span>
          </h2>
        </motion.div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6"
              >
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400">
                    <feature.icon className="h-6 w-6 text-black" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

