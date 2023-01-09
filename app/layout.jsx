'use client';

import './globals.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ThemeWrapper from './contexts/theme'
import { AuthWapper } from './contexts/auth';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <AuthWapper>
        <ThemeWrapper>
          <body>
            <Header/>
            <main>
              {children}
            </main>
            <Footer/>
          </body>
        </ThemeWrapper>
      </AuthWapper>
    </html>
  )
}
