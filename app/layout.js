import './globals.css'

export const metadata = {
  title: 'Next.js App',
  description: 'Next.js application for GitHub Actions caching and artifacts'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
