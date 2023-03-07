import Head from "next/head";
import Article from "../../components/Article";
import Heading from "../../components/Heading";
import Layout from "../../components/Layout";

const Blog = ({ articles }) => {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <Heading
        size={"big"}
        titleText={"Blog"}
        subtitleText={"Leer over ons op onze blog pagina!"}
        align={"left"}
      />
      {articles.data.map((content, index) => {
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
    </Layout>
  );
};

export const getStaticProps = async () => {
  const articlesRes = fetch(
    `http://localhost:${process.env.CMS_PORT}/api/articles?populate=*`
  );
  const response = await articlesRes;

  return {
    props: {
      articles: await response.json(),
    },
  };
};

export default Blog;
