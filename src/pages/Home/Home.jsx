import "./Home.css";

import Hero from "../../components/Hero/Hero";
import Spotlight from "../../components/Spotlight/Spotlight";
import Expertise from "../../components/Expertise/Expertise";
import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects";

export default function Home() {
  return (
    <>
      <Hero />
      <Spotlight />
      <Expertise />
      <FeaturedProjects />
    </>
  );
}
