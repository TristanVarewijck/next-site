import styles from "./index.module.scss";
import Head from "next/head";
import Layout from "../components/Layout";
import PhoneNumber from "../components/PhoneNumber";
import Heading from "../components/Heading";
import PromotionCard from "../components/PromotionCard";
import { promotionCardProps } from "../types";
import ServiceBlock from "../components/ServiceBlock";
import { serviceBlockProps } from "../types";
import { Check } from "react-feather";
import TextBlock from "../components/TextBlock";
import { textBlockProps } from "../types";
import Link from "next/link";
import Image from "next/image";

const Dashboard = () => {
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

  const aboutArticlesContent: textBlockProps[] = [
    {
      uuid: "article1",
      title: "Al meer dan 15 jaar doen wij vertrouwdt onderhoud",
      text: "Wij van All Mobiel Cars zijn een familiebedrijf dat is opgericht in het jaar 1990. Ons familiebedrijf werd opgericht in Wormerveer waar wij ook tegenwoordig nog steeds zijn terug te vinden. Het bedrijf is inmiddels wel overgegaan van vader op zoon, maar de uitstekende service en scherpe prijs waar wij in de loop der jaren bekendheid door hebben weten te verwerven zijn zoals vanouds nog steeds de sterke troeven van ons bedrijf.",
      hasLink: true,
      linkText: "Lees meer",
      linkHref: "#",
    },
    {
      uuid: "article2",
      title: "All Mobiel Cars op RTL 7 en te zien op Videoland",
      text: "All Mobiel Cars vindt het belangrijk om ten allen tijde een uitstekende klanttevredenheid te kunnen garanderen. In ons pand op het Zuideinde van Wormerveer verwelkomen we graag iedereen die op zoek is naar de best mogelijke service en prijs-kwaliteitverhouding voor zijn of haar auto. Het éénmalig verkopen van een auto is natuurlijk erg eenvoudig, maar het liefst beschikken wij over een tevreden en terugkerend cliënteel.",
      hasLink: true,
      linkText: "Lees meer",
      linkHref: "#",
    },
    {
      uuid: "article3",
      title:
        "Ocassions, ruilen, inkoop, verkoop, private lease en zakelijke lease",
      text: "All Mobiel Cars is een merkonafhankelijk bedrijf. Dit zorgt er in de praktijk voor dat wij onze klanten steeds het meest waardevolle en objectieve advies kunnen geven. U heeft er namelijk niets aan om een dure auto te kopen die u helemaal niet nodig heeft. Wilt u graag een beroep kunnen doen op een eerlijk en transparant bedrijf welke merkonafhankelijk is? Ook in dat geval bent u bij ons beslist aan het juiste adres!",
      hasLink: true,
      linkText: "Lees meer",
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
          titleText="Onze diensten"
          subtitleText="Wij hebben een ruim assortiment aan diensten die u kunnen helpen zie hier beneden een overzicht van onze diensten"
          align="center"
        />
        <div className="row gx-5 mb-5">
          {serviceBlocksContent.map((content) => {
            return (
              <div className="col-md">
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
          titleText="Eenvoudig een afspraak inplannen"
          subtitleText="Snel en gemakkelijk: selecteer de gewenste dienst en plan uw afspraak!"
          align="center"
        />
        <div className="position-relative mb-4" style={{ height: "400px" }}>
          <Image
            src={"/images/static/image-4.jpg"}
            alt={"Afspraak maken section image"}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="section-link d-flex justify-content-center">
          <Link className="btn btn-primary" href="/contact">
            Afspraak maken
          </Link>
        </div>
      </section>

      <section className="about">
        <Heading titleText="Over All Mobiel Cars" align="left" />
        {aboutArticlesContent.map((content, index) => {
          return (
            <div
              className="row gx-5 mb-5"
              key={content.uuid}
              style={
                index % 2 == 0
                  ? { flexDirection: "row-reverse" }
                  : { flexDirection: "row" }
              }
            >
              <div className="col">
                <TextBlock
                  uuid={content.uuid}
                  title={content.title}
                  text={content.text}
                  hasLink
                  linkHref="#"
                  linkText="Lees meer"
                />
              </div>
              <div className="col d-flex align-items-center">
                <Image
                  src={"/images/static/image-4.jpg"}
                  width={100}
                  height={100}
                  alt={"Afspraak maken section image"}
                />
              </div>
            </div>
          );
        })}
      </section>
    </Layout>
  );
};

export default Dashboard;
