import Criteria from "./components/criteria";
import Header from "./components/header";
import Hero from "./components/hero";
import Intro from "./components/introduction";
import Rules from "./components/rules";

const App = () => {
  return (
    <main className="w-screen overflow-hidden mb-52">
      <Header />
      <Hero />
      <Intro />
      <Rules />
      <Criteria />
    </main>
  );
};

export default App;
