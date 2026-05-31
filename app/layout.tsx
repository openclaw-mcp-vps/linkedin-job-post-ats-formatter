import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ATS Job Formatter — Format Job Posts for Workday, Greenhouse & Lever',
  description: 'Convert job descriptions into optimized formats for any ATS platform. Built for HR managers, recruiters, and hiring coordinators.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1dc89258-8543-42fe-a9b3-9b10fba76226"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
