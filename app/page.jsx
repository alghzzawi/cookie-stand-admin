"use client"

import { Inter } from '@next/font/google'
import Main from './components/Main'
import {useContext} from 'react';
import {AuthContext} from './contexts/auth'
import LoginForm from './components/LoginForm';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const {tokens} = useContext(AuthContext)

  return (
    <div>
      {tokens ? <Main/> : <LoginForm/>}
    </div>
  )
}
