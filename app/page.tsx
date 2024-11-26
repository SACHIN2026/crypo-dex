import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Comparison } from "@/components/comparison"
import { Features } from "@/components/features"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Comparison />
      <Features />
      <FAQ />
      <Footer />
    </main>
  )
}

