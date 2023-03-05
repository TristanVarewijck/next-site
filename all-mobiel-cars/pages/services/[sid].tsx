import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const Service = ({ service }) => {
  const router = useRouter();
  const { sid } = router.query;
  return (
    <Layout>
      <Head>
        <title>{`Service-${sid}`}</title>
      </Head>

      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/services">Services</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {service.data.attributes.title}
          </li>
        </ol>
      </nav>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const servicesRes = fetch(
    `http://localhost:${process.env.CMS_PORT}/api/products`
  );
  const response = await servicesRes;
  const responseJson = await response.json();
  const paths = responseJson.data.map((content, _index) => ({
    params: { sid: content.id.toString() },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps = async ({ params }) => {
  const servicesRes = fetch(
    `http://localhost:${process.env.CMS_PORT}/api/products/${params.sid}`
  );
  const response = await servicesRes;

  return {
    props: {
      service: await response.json(),
    },
  };
};

export default Service;
