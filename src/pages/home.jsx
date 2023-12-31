import Criteria from "../components/criteria";
import FAQ from "../components/faq";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import Intro from "../components/introduction";
import Partners from "../components/partners";
import PrivacyPolicy from "../components/privacy";
import PrizesAndRewards from "../components/prizes";
import Rules from "../components/rules";
import Timeline from "../components/timeline";

const Home = () => {
  return (
    <main className="w-screen overflow-hidden">
      <Header />
      <Hero />
      <Intro />
      <Rules />
      <Criteria />
      <FAQ />
      <Timeline />
      <PrizesAndRewards />
      <Partners />
      <PrivacyPolicy />
      <Footer />
    </main>
  );
};
export default Home;
