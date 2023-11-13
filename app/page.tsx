import Image from 'next/image'
import TopNav from "./components/TopNav"
import Banner from './components/Banner'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center">
    <TopNav/>
    <Banner/>
    </main>
  )
}
  