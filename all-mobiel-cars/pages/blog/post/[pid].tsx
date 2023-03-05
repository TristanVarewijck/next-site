import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Heading from "../../../components/Heading";
import Layout from "../../../components/Layout";
import styles from "./blogPost.module.scss";

const blogPost = ({ post }) => {
  const router = useRouter();
  const { pid } = router.query;
  const { attributes } = post.data;

  return (
    <Layout>
      <Head>
        <title>{`Post-${pid}`}</title>
      </Head>

      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {attributes.title}
          </li>
        </ol>
      </nav>

      <Heading titleText={attributes.title} align={"center"} size={"big"} />
      <section className={styles.contentContainer}>
        <p>{attributes.text}</p>
      </section>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const articlesRes = fetch(
    `http://localhost:${process.env.CMS_PORT}/api/articles?populate=*`
  );
  const response = await articlesRes;
  const responseJson = await response.json();
  const paths = responseJson.data.map((content, _index) => ({
    params: { pid: content.id.toString() },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps = async ({ params }) => {
  const articlesRes = fetch(
    `http://localhost:${process.env.CMS_PORT}/api/articles/${params.pid}?populate=*`
  );
  const response = await articlesRes;

  return {
    props: {
      post: await response.json(),
    },
  };
};
export default blogPost;
