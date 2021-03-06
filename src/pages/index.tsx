import { GetStaticProps } from 'next';

import Image from 'next/image';
import Head from 'next/head';

import styles from './home.module.scss';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | deardiary</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Olá, seja bem-vindo(a)</span>
          <h1>Registre todos os seus momentos e<br /><span>não perca nada</span></h1>
          <p>
            Tenha acesso a todos os recursos <br />
            <span>por {product.amount}/mês</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <Image
          src="/images/ilustra-home.svg"
          alt="Girl writing"
          width="585"
          height="484"
        />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const price = await stripe.prices.retrieve('price_1KIauxLRywkHGWxrM1Zzky4V')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}
