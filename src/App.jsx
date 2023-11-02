import Header from "./components/header";
import Hero from "./components/hero";
import Intro from "./components/introduction";

const App = () => {
  return (
    <main className="w-screen overflow-hidden">
      <Header />
      <Hero />
      <Intro />
    </main>
  );
};

export default App;
