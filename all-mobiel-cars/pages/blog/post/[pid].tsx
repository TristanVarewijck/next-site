import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Heading from "../../../components/Heading";
import Layout from "../../../components/Layout";
import styles from "./blogPost.module.scss";

const blogPost = ({ article }) => {
  const router = useRouter();
  const { pid } = router.query;
  const { attributes } = article.data;

  return (
    <Layout>
      <Head>
        <title>{`artikel: ${pid}`}</title>
      </Head>

      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Artikel
          </li>
        </ol>
      </nav>

      <Heading titleText={attributes.title} align={"center"} />
      <section className={styles.contentContainer}>
        <p>{attributes.text}</p>
      </section>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articlesRes = fetch("http://localhost:1337/api/articles?populate=*");
  const response = await articlesRes;
  const responseJson = await response.json();
  const paths = responseJson.data.map((content, _index) => ({
    params: { pid: content.id.toString() },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const articlesRes = fetch(
    `http://localhost:${process.env.CMS_PORT}/api/articles/${params.pid}?populate=*`
  );
  const response = await articlesRes;

  return {
    props: {
      article: await response.json(),
    },
  };
}
export default blogPost;