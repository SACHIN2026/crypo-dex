import './globals.css'
import { Raleway } from "next/font/google"

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
})

export const metadata = {
  title: 'MoonEX - Trusted Multi-Chain DEX Platform',
  description: 'Trade, earn, and earn crypto on the all-in-one multi-chain DEX',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${raleway.variable} font-raleway bg-[#020817]`}>
        {children}
      </body>
    </html>
  )
}

