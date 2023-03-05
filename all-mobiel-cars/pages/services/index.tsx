import Head from "next/head";
import Layout from "../../components/Layout";
import Heading from "../../components/Heading";
import Link from "next/link";

const Services = ({ services }) => {
  const servicesArr = services.data;

  return (
    <Layout>
      <Head>
        <title>Services</title>
      </Head>

      <Heading
        size={"big"}
        titleText={"Services"}
        subtitleText={
          "Here you can find detailed information about our services"
        }
        align={"left"}
      />

      {servicesArr.map((service) => {
        return (
          <section id={service.attributes.title}>
            <Heading
              size={"small"}
              titleText={service.attributes.title}
              align={"center"}
            />

            {service.attributes.service_products.data.map((product) => {
              return (
                <div className="card w-50">
                  <div className="card-body">
                    <h5 className="card-title">{product.attributes.title}</h5>
                    <p className="card-text">
                      {product.attributes.shortDescription}
                    </p>
                    <Link
                      href={`services/${service.id}`}
                      className="btn btn-primary"
                    >
                      Lees meer
                    </Link>
                  </div>
                </div>
              );
            })}
          </section>
        );
      })}
    </Layout>
  );
};

export const getStaticProps = async () => {
  const servicesRes = fetch(
    `http://localhost:${process.env.CMS_PORT}/api/services?populate=*`
  );
  const response = await servicesRes;

  return {
    props: {
      services: await response.json(),
    },
  };
};

export default Services;
