'use client'

import { Head, Torso, Start, Audio } from "@/components"
import { useState } from "react"

export default function Home() {
  const [turnOn, setTurnOn] = useState(false)

  const lightUp = () => {
      setTurnOn(true)
  }
  return (
    <main 
    className="bg-black w-screen h-screen flex flex-col">
      <Head turnOn={turnOn} />
      <Torso turnOn={turnOn} /> 
      <Start lightUp={lightUp} />

      {turnOn ? <Audio src='/ignition.wav'></Audio> : null}
      {turnOn ? <Audio src='/breath.flac'></Audio> : null}
    </main>
  )
}
