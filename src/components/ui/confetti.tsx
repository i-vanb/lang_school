'use client'
import React, {useEffect, useState} from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confe from 'react-confetti'

type ConfettiProps = {
  time?: number,
  recycle?: boolean
}

export const Confetti =  ({time = 5000, recycle = true}:ConfettiProps) => {
  const { width, height } = useWindowSize()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted || !width) return null

  return (
    <Confe
      tweenDuration={time}
      recycle={recycle}
      style={{zIndex: 1000}}
      width={width}
      height={height}
    />
  )
}