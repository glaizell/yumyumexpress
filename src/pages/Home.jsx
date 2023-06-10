import Hero from "../components/home/Hero";
import brocolli from "../assets/image/bg/brocolli.png";
import condiments from "../assets/image/bg/condiments.png";
import leaf from "../assets/image/bg/leaf.png";
import leafs from "../assets/image/bg/leafs.png";
import lemon from "../assets/image/bg/lemon.png";
import powder from "../assets/image/bg/powder.png";
import sili from "../assets/image/bg/sili.png";
import tomato from "../assets/image/bg/tomato.png";

const Home = () => {
  return (
    <main className="min-h-screen relalgve ">
      <img
        src={brocolli}
        alt="background design"
        className="hidden lg:block absolute w-1/5 h-auto -z-50 top-16 -right-48"
      />
      <img
        src={condiments}
        alt="background design"
        className="hidden lg:block absolute  w-1/5 h-auto -z-50 bottom-0 -right-32"
      />
      <img
        src={leaf}
        alt="background design"
        className="hidden lg:block absolute w-24 h-auto -z-50 top-52 right-44"
      />
      <img
        src={leafs}
        alt="background design"
        className="hidden lg:block absolute w-1/5 h-auto -z-50 top-24 -left-8"
      />
      <img
        src={lemon}
        alt="background design"
        className="hidden lg:block absolute w-24 h-auto -z-50 right-20 bottom-32"
      />
      <img
        src={powder}
        alt="background design"
        className="hidden lg:block absolute w-28 h-auto -z-50 top-48 left-20"
      />
      <img
        src={sili}
        alt="background design"
        className="hidden lg:block absolute w-24 h-auto -z-48 left-20 bottom-12"
      />
      <img
        src={tomato}
        alt="background design"
        className="hidden lg:block absolute w-1/5 h-auto -z-50 -left-20 bottom-14"
      />

      <Hero />
    </main>
  );
};
export default Home;
