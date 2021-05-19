import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a monorepo with lerna</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt cupiditate iste adipisci blanditiis illum provident esse, quos quae accusamus rerum quod alias consequatur magni, aperiam, architecto tempore? Voluptas, animi?</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a monorepo with lerna</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt cupiditate iste adipisci blanditiis illum provident esse, quos quae accusamus rerum quod alias consequatur magni, aperiam, architecto tempore? Voluptas, animi?</p>
          </a>
        </div>
      </main>
    </>
  )
}