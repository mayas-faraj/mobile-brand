import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Map from "../components/Map";
import Query from "../components/Query";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title='AmkInt Landing Page' />
      <Layout>
        <Hero />
        <Feature />
        <Map />
        <Query />
        {/*<Pricing />*/}
      </Layout>
    </>
  );
}
