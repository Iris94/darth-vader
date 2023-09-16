import { Head, Torso } from "@/components"

export default function Home() {
  return (
    <main 
    className="bg-black w-screen h-screen flex flex-col overflow-hidden z-0">
      <Head />
      <Torso /> 
    </main>
  )
}
