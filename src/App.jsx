import Criteria from "./components/criteria";
import FAQ from "./components/faq";
import Header from "./components/header";
import Hero from "./components/hero";
import Intro from "./components/introduction";
import PrizesAndRewards from "./components/prizes";
import Rules from "./components/rules";
import Timeline from "./components/timeline";

const App = () => {
  return (
    <main className="w-screen overflow-hidden mb-52">
      <Header />
      <Hero />
      <Intro />
      <Rules />
      <Criteria />
      <FAQ />
      <Timeline />
      <PrizesAndRewards />
    </main>
  );
};

export default App;
