'use client'

import { useModal } from '@/hooks/useModal'
import { useEffect } from 'react'

export default function SetupPage() {
  const onOpen = useModal((state) => state.onOpen)
  const isOpen = useModal((state) => state.isOpen)

  useEffect(() => {
    if (!isOpen) {
      onOpen()
    }
  }, [isOpen, onOpen])

  return (
    <div className='p-4'>
      root
    </div>
  )
}
