/* eslint-disable @next/next/no-sync-scripts */
import Header from '@/components/Header'
import './globals.css'
import Providers from './providers'

export const metadata = {
  title: 'Blog | Andikarna',
  description: 'Blog Website ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>
          <Header/>
          {children}
        </Providers>
      </body>
    </html>
  )
}
