import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const Dashboard = () => {
  return (
    <div>
      <Head>
        <title>All Mobiel Cars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="title">Dashboard</h1>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      {/* <Image
        src="/images/logo.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="logo"
      /> */}
    </div>
  );
};

export default Dashboard;
