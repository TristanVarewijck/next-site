import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Heading from "../../components/Heading";
import Layout from "../../components/Layout";
import ReadOnlyText from "../../components/ReadOnlyText";

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

      <Heading
        titleText={service.data.attributes.title}
        align={"center"}
        size={"big"}
      />
      <ReadOnlyText text={service.data.attributes.content} />

      <div className="section-link d-flex justify-content-center mb-5">
        <Link className="btn btn-primary" href="/contact">
          Afspraak maken voor {service.data.attributes.title}
        </Link>
      </div>
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
