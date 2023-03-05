import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const Service = ({ product }) => {
  const router = useRouter();
  const { sid } = router.query;
  return (
    <Layout>
      <Head>
        <title>{`product: ${sid}`}</title>
      </Head>
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
      product: await response.json(),
    },
  };
};

export default Service;
