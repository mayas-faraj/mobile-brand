import Query from "../components/Query";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title='AmkInt Landing Page' />
      <Layout>
        <Query />
      </Layout>
    </>
  );
}
