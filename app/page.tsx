import Image from "next/image";
import TopNav from "./components/core/TopNav";
import Banner from "./components/sections/Banner";
import Benefits from "./components/sections/Benefits";
import ProblemStatement from "./components/sections/ProblemStatement";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <TopNav />
      <Banner />
      <Benefits />
      <ProblemStatement />
    </main>
  );
}
