import TopNav from "./components/core/TopNav";
import Banner from "./components/sections/Banner";
import Benefits from "./components/sections/Benefits";
import ProblemStatement from "./components/sections/ProblemStatement";
import JoinCommunity from "./components/sections/JoinCommunity";
import Solutions from "./components/sections/Solutions";
import GetStarted from "./components/sections/GetStarted";
import Promise from "./components/sections/Promise";
import Testimonials from "./components/sections/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center bg-gray-100">
      <TopNav />
      <Banner />
      <Benefits />
      <ProblemStatement />
      <JoinCommunity />
      <Solutions />
      <GetStarted />
      <Promise />
      <Testimonials />
    </main>
  );
}
