import { Head, Torso } from "@/components"

export default function Home() {
  return (
    <main 
    className="bg-white w-screen h-screen flex flex-col overflow-hidden">
      <Head />
      <Torso /> 
    </main>
  )
}
