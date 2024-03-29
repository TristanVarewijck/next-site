import Head from "next/head";
import Layout from "../components/Layout";
import PhoneNumber from "../components/PhoneNumber";
import Heading from "../components/Heading";
import PromotionCard from "../components/PromotionCard";
import ServiceBlock from "../components/ServiceBlock";
import Article from "../components/Article";
import Link from "next/link";
import Image from "next/image";

const Dashboard = ({ articles, services, promotions }) => {
  const getLastThreeItems = (items) => {
    const lastThreeItems = items.data.slice(Math.max(items.data.length - 3, 0));
    return lastThreeItems;
  };

  const lastThreeArticles = getLastThreeItems(articles);
  const lastThreePromotions = getLastThreeItems(promotions);

  return (
    <Layout>
      <Head>
        <title>All Mobiel Cars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="landing">
        <div className="row">
          <div className="col-md">
            <Heading
              size={"big"}
              titleText={
                "All-in, All Mobile Cars is de enige garage die je nodig hebt"
              }
              subtitleText={
                "Bij All Mobile Cars onderhouden wij alles omtrent uw auto, wij doen goedkope en snelle service, omdat wij geloven in goede klantenservice."
              }
              align={"left"}
            />
          </div>
          <div className="col-md">
            <PhoneNumber text={"Even bellen?"} number={"(075) 622 9727"} />
          </div>
        </div>

        <div className="row gx-5 d-flex justify-content-center">
          {lastThreePromotions.map((content) => {
            return (
              <div
                key={content.uuid}
                className="col-md d-flex justify-content-center"
              >
                <PromotionCard
                  uuid={content.id}
                  img={`http://localhost:${process.env.CMS_PORT}${content.attributes.cover.data.attributes.url}`}
                  imgAlt={"promotion-cover"}
                  title={content.attributes.title}
                  url={`/services/#${
                    content.attributes.service.data
                      ? content.attributes.service.data.attributes.title
                      : "#"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </section>

      <section className="services">
        <Heading
          size={"big"}
          titleText={"Onze diensten"}
          subtitleText={
            "Wij hebben een ruim assortiment aan diensten die u kunnen helpen zie hier beneden een overzicht van onze diensten"
          }
          align={"center"}
        />
        <div className="row gx-5 mb-5">
          {services.data.map((content) => {
            return (
              <div className="col-md" key={content.uuid}>
                <ServiceBlock
                  uuid={content.id}
                  title={content.attributes.title}
                  href={`services/#${content.attributes.title}`}
                />
              </div>
            );
          })}
        </div>
        <div className="section-link d-flex justify-content-center">
          <Link className="btn btn-primary" href="/services">
            Diensten
          </Link>
        </div>
      </section>

      <section className="appointment">
        <Heading
          size={"big"}
          titleText={"Eenvoudig een afspraak inplannen"}
          subtitleText={
            "Snel en gemakkelijk: selecteer de gewenste dienst en plan uw afspraak!"
          }
          align={"center"}
        />
        <div className="position-relative mb-4" style={{ height: "400px" }}>
          <Image
            src={"/images/static/image-4.jpg"}
            alt={"Afspraak maken section image"}
            layout={"fill"}
            objectFit={"contain"}
          />
        </div>
        <div className="section-link d-flex justify-content-center">
          <Link className="btn btn-primary" href="/contact">
            Afspraak maken
          </Link>
        </div>
      </section>

      <section className="about">
        <Heading
          titleText={"Recente artikelen op onze Blog"}
          align={"left"}
          size={"big"}
        />
        {lastThreeArticles.map((content, index) => {
          return (
            <Article
              uuid={content.id}
              title={content.attributes.title}
              text={content.attributes.text}
              hasLink={content.attributes.hasLink}
              linkHref={`blog/post/${content.id}`}
              linkText={"Lees meer"}
              image={`http://localhost:${process.env.CMS_PORT}${content.attributes.image.data.attributes.url}`}
              index={index}
              createdAt={content.attributes.createdAt}
            />
          );
        })}
        <div className="section-link d-flex justify-content-center">
          <Link className="btn btn-primary" href="/blog">
            Bekijk alle artikelen
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const articlesRes = fetch(
    `http://localhost:${process.env.CMS_PORT}/api/articles?populate=*`
  );
  const promotionCardsRes = fetch(
    `http://localhost:${process.env.CMS_PORT}/api/promotions?populate=*`
  );
  const servicesRes = fetch(
    `http://localhost:${process.env.CMS_PORT}/api/services`
  );
  const responses = await Promise.all([
    articlesRes,
    servicesRes,
    promotionCardsRes,
  ]);
  return {
    props: {
      articles: await responses[0].json(),
      services: await responses[1].json(),
      promotions: await responses[2].json(),
    },
  };
};

export default Dashboard;
