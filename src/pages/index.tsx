import Image from 'next/image';
import Head from 'next/head';

import styles from './home.modules.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | deardiary</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Olá, seja bem-vindo(a)</span>
          <h1><span>Registre todos os seus momentos </span>e não perca nada</h1>
          <p>
            Tenha acesso aos recursos completos <br />
            <span>por R$9,90/mês</span>
          </p>
        </section>
        <Image
          src="/images/ilustra-home.svg"
          alt="Girl coding"
          width="585"
          height="484"
        />
      </main>
    </>
  )
}
