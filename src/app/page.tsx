import Image from "next/image";
import Hero from "./components/sections/Hero";
import NavBarDesktop from "./components/ui/NavBarDesktop";
import Slider from "./components/sections/Slider";
import InfoContainer from "./components/sections/InfoContainer";
import Divider from "./components/sections/Divider";
import { InfoContainer_2 } from "./components/sections/InfoContainer_2";
import { Divider_2 } from "./components/sections/Divider_2";
import Benefits from "./components/sections/Benefits";
import Divider_3 from "./components/sections/Divider_3";
import Pricing from "./components/sections/Pricing";
import Divider_4 from "./components/sections/Divider_4";
import FAQs from "./components/sections/FAQs";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <InfoContainer />
      <Divider />
      <InfoContainer_2 />
      <Divider_2 />
      <Benefits />
      <Divider_3 />
      <Pricing />
      <Divider_4 />
      <FAQs />

      <NavBarDesktop />
    </main>
  );
}
