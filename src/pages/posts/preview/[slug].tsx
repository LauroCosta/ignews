import {GetStaticProps } from "next";
import { format, parseISO } from "date-fns";
import Head from "next/head";
import ptBR from "date-fns/locale/pt-BR";
import { RichText } from "prismic-dom";

import styles from "../post.module.scss";
import { getPrismicClient } from "../../../services/prismic";
import Link from "next/link";

interface PostPreviewProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  };
}

export default function PostPreview({ post }: PostPreviewProps) {
  return (
    <>
      <Head>
        <title>{post.title} | Ignews</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
            className={`${styles.postContent} ${styles.previewContent}`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className={styles.continueReading}>
           Wanna continue reading?
            <Link href="/">
              <a>Subscribe now 🤗</a>
            </Link>  
            
          </div>
        </article>
      </main>
    </>
  );
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'

  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const { slug } = params;
  const prismic = getPrismicClient();

  const response = await prismic.getByUID("post", String(slug), {});
  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content.splice(0, 3)),
    updatedAt: format(
      parseISO(response.last_publication_date),
      "dd 'de' MMMM 'de' yyyy",
      { locale: ptBR }
    ),
  };

  return {
    props: {
      post,
    },
  };
};
