"use client"

import { motion } from "framer-motion"
import { Check, X } from 'lucide-react'
import Image from 'next/image'

const features = [
  "Point no one",
  "Point no two",
  "Point no three",
  "Point no four",
  "Point no five",
]

const platforms = [
  {
    name: "MoonEX",
    logo: "/placeholder.svg?height=40&width=120",
  },
  {
    name: "UniKEX",
    logo: "/placeholder.svg?height=40&width=120",
  }
]

export function Comparison() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why <span className="text-yellow-400">MoonEX</span> ?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Comparison
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl rounded-3xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 sm:mt-20"
        >
          <div className="p-8">
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="col-span-1" />
              {platforms.map((platform) => (
                <div key={platform.name} className="flex justify-center">
                  <div className="w-32 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                    <span className="text-white">{platform.name}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={feature} className="grid grid-cols-3 gap-4 py-4 border-b border-gray-800">
                  <span className="text-sm text-gray-400">{feature}</span>
                  <div className="flex justify-center">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="flex justify-center">
                    <X className="h-5 w-5 text-red-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

