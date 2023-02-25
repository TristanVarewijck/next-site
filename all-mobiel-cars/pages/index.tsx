import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import PhoneNumber from "../components/PhoneNumber";

const Dashboard = () => {
  return (
    <Layout>
      <Head>
        <title>All Mobiel Cars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <div className="row">
          <div className="col-md">
            <div className="heading">
              <h1>
                All-in, All Mobile Cars is de enige garage die je nodig hebt
              </h1>
              <p>
                Bij All Mobile Cars onderhouden wij alles omtrent uw auto, wij
                doen goedkope en snelle service, omdat wij geloven in goede
                klantenservice.
              </p>
            </div>
          </div>
          <div className="col-md">
            <PhoneNumber text="Even bellen?" number="(075) 622 9727" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
