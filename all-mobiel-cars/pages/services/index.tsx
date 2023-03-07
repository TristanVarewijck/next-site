import Head from "next/head";
import Layout from "../../components/Layout";
import Heading from "../../components/Heading";
import PromotionCardSmall from "../../components/PromotionCardSmall";
import ProductPreviewCard from "../../components/ProductPreviewCard";

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

            {service.attributes.promotion.data && (
              <PromotionCardSmall
                title={service.attributes.promotion.data.attributes.title}
              />
            )}

            <div className="row gx-5 gy-2">
              {service.attributes.products.data.map((product) => {
                return (
                  <div key={product.id} className="col-md">
                    <ProductPreviewCard
                      title={product.attributes.title}
                      shortDescription={product.attributes.shortDescription}
                      productId={product.id}
                    />
                  </div>
                );
              })}
            </div>
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
