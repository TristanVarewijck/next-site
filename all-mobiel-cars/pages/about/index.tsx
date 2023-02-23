import Head from "next/head";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <Head>
        <title>Over ons</title>
      </Head>

      <h1 className="title">About</h1>
      <Link href="/">back to dashboard</Link>
    </div>
  );
};

export default About;
