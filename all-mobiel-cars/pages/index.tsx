import Head from "next/head";
import Layout from "../components/Layout";
import PhoneNumber from "../components/PhoneNumber";
import Heading from "../components/Heading";
import PromotionCard from "../components/PromotionCard";
import { promotionCardProps } from "../types";

const Dashboard = () => {
  const cardsContent: promotionCardProps[] = [
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
              titleText="All-in, All Mobile Cars is de enige garage die je nodig hebt"
              subtitleText="Bij All Mobile Cars onderhouden wij alles omtrent uw auto, wij
              doen goedkope en snelle service, omdat wij geloven in goede
              klantenservice."
              align="left"
            />
          </div>
          <div className="col-md">
            <PhoneNumber text="Even bellen?" number="(075) 622 9727" />
          </div>
        </div>

        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {cardsContent.map((content) => {
            return (
              <div className="col-md" style={{ display: "flex" }}>
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
    </Layout>
  );
};

export default Dashboard;
