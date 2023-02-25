import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <h1 className="title">Contact</h1>
      <Link href="/">back to dashboard</Link>
    </Layout>
  );
};

export default Contact;
