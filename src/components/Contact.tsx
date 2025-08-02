'use client'

import { useEffect } from 'react'

// Tally 타입 정의
declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void
    }
  }
}

export default function Contact() {
  return null
} 