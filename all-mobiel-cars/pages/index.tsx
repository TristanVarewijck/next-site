import Head from "next/head";
import Layout from "../components/Layout";
import PhoneNumber from "../components/PhoneNumber";
import Heading from "../components/Heading";
import PromotionCard from "../components/PromotionCard";
import { promotionCardProps } from "../types";
import ServiceBlock from "../components/ServiceBlock";
import { serviceBlockProps } from "../types";
import { Check } from "react-feather";
import Article from "../components/Article";
import Link from "next/link";
import Image from "next/image";

const Dashboard = ({ articles, services }) => {
  const promotionCardsContent: promotionCardProps[] = [
    {
      uuid: "card1",
      img: "/images/promotionCards/image-1.png",
      imgAlt: "test",
      title: "Goedkope banden om te wisselen",
      subtitle: null,
      hasLink: true,
      linkText: "Zie aanbod",
      linkHref: "#",
    },
    {
      uuid: "card2",
      img: "/images/promotionCards/image-2.png",
      imgAlt: "test",
      title: "Nieuwe en tweedehands Auto’s verkoop",
      subtitle: null,
      hasLink: true,
      linkText: "Zie aanbod",
      linkHref: "#",
    },
    {
      uuid: "card3",
      img: "/images/promotionCards/image-3.png",
      imgAlt: "test",
      title: "Snelle analyses met uitstekent onderhoud",
      subtitle: null,
      hasLink: true,
      linkText: "Zie aanbod",
      linkHref: "#",
    },
  ];

  const serviceBlocksContent: serviceBlockProps[] = [
    {
      uuid: "auto-onderhoud",
      icon: <Check />,
      title: "Auto onderhoud",
      href: "#",
    },
    {
      uuid: "apk",
      icon: <Check />,
      title: "APK",
      href: "#",
    },
    {
      uuid: "schade-herstel",
      icon: <Check />,
      title: "Schade herstel",
      href: "#",
    },
    {
      uuid: "motor-flushen",
      icon: <Check />,
      title: "Motor flushen",
      href: "#",
    },
    {
      uuid: "bandenwissel",
      icon: <Check />,
      title: "Bandenwissel",
      href: "#",
    },
    {
      uuid: "leasen",
      icon: <Check />,
      title: "Leasen",
      href: "#",
    },
    {
      uuid: "chippen",
      icon: <Check />,
      title: "Chippen",
      href: "#",
    },
    {
      uuid: "schoonmaak",
      icon: <Check />,
      title: "Schoonmaak",
      href: "#",
    },
  ];

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
          {promotionCardsContent.map((content) => {
            return (
              <div
                key={content.uuid}
                className="col-md d-flex justify-content-center"
              >
                <PromotionCard
                  uuid={content.uuid}
                  img={content.img}
                  imgAlt={content.imgAlt}
                  title={content.title}
                  hasLink={true}
                  linkHref={content.linkHref}
                  linkText={content.linkText}
                />
              </div>
            );
          })}
        </div>
      </section>

      <section className="services">
        <Heading
          titleText={"Onze diensten"}
          subtitleText={
            "Wij hebben een ruim assortiment aan diensten die u kunnen helpen zie hier beneden een overzicht van onze diensten"
          }
          align={"center"}
        />
        <div className="row gx-5 mb-5">
          {serviceBlocksContent.map((content) => {
            return (
              <div className="col-md" key={content.uuid}>
                <ServiceBlock
                  uuid={content.uuid}
                  icon={content.icon}
                  title={content.title}
                  href={content.href}
                />
              </div>
            );
          })}
        </div>
        <div className="section-link d-flex justify-content-center">
          <Link className="btn btn-primary" href="#">
            Diensten
          </Link>
        </div>
      </section>

      <section className="appointment">
        <Heading
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
        <Heading titleText={"Over All Mobiel Cars"} align={"left"} />
        {articles.data.map((content, index) => {
          return (
            <Article
              uuid={content.id}
              title={content.attributes.title}
              text={content.attributes.text}
              hasLink={content.attributes.hasLink}
              linkHref={content.attributes.linkHref}
              linkText={content.attributes.linkText}
              image={`http://localhost:1337${content.attributes.image.data.attributes.url}`}
              index={index}
            />
          );
        })}
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const articlesRes = fetch("http://localhost:1337/api/articles?populate=*");
  const servicesRes = fetch("http://localhost:1337/api/services");
  const responses = await Promise.all([articlesRes, servicesRes]);
  return {
    props: {
      articles: await responses[0].json(),
      services: await responses[1].json(),
    },
  };
}

export default Dashboard;
