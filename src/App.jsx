import "./styles/global.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import HappeningNow from "./components/HappeningNow";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trending />
        <HappeningNow />
      </main>
      <Footer />
    </>
  );
}
