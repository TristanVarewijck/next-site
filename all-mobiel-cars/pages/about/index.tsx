import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>Over ons</title>
      </Head>

      <h1>About</h1>
      <Link href="/">back to dashboard</Link>
    </Layout>
  );
};

export default About;
