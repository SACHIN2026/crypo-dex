"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden pt-14">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-yellow-500/20 opacity-20" />
      </div>
      <div className="absolute top-10 right-20">
        <Sparkles className="h-6 w-6 text-white opacity-50" />
      </div>
      <div className="absolute bottom-20 left-10">
        <Sparkles className="h-4 w-4 text-white opacity-30" />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 mb-4"
          >
            {/* <span className="inline-flex items-center rounded-md bg-purple-400/10 px-2 py-1 text-sm font-medium text-purple-400 ring-1 ring-inset ring-purple-400/20">
              Steve
            </span> */}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
          >
            Trusted Multi-Chain
            <span className="text-yellow-400"> DEX Platform</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg leading-8 text-gray-300"
          >
            Trade, earn, and earn crypto on the all-in-one multi-chain DEX
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex items-center gap-x-6"
          >
            <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500">
              Trade Now
            </Button>
            <Button size="lg" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="absolute right-0 top-20 w-[300px] h-[300px] rounded-full bg-yellow-400 blur-3xl opacity-20" />
    </div>
  )
}

