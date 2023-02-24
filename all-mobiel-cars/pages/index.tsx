import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <Head>
        <title>All Mobiel Cars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="title">Dashboard</h1>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </Layout>
  );
};

export default Dashboard;
