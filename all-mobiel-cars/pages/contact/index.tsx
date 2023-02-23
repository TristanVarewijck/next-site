import Head from "next/head";
import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <h1 className="title">Contact</h1>
      <Link href="/">back to dashboard</Link>
    </div>
  );
};

export default Contact;
