import Feature from "../components/Feature";
// import Pricing from "../components/Pricing";
import Map from "../components/Map";
import Query from "../components/Query";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

const features = [
  "With our online platform, you can browse through products.",
  "We offer convenient delivery options ",
  "Staying up-to-date with the latest technology",
  "We are offering our customers a wide range of mobile phones at competitive prices."
];

export default function Home() {
  return (
    <>
      <SeoHead title='AmkInt Landing Page' />
      <Layout isHome={true}>
        <Hero />
        <Feature title="Are you looking for a new phone"
          text="Welcome to our mobile trading company based in the UAE! We are proud to be direct partners with leading mobile phone brands such as Samsung, One-Plus, Apple, Xiaomi, Oppo, Vivo and Infinix. Our company deals in both retail and wholesale, offering our customers a wide range of mobile phones at competitive prices."
          image="/assets/mobile.png"
          features={features}
        />
        <Map />
        <Query />
        {/*<Pricing />*/}
      </Layout>
    </>
  );
}
