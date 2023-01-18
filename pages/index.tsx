import Head from 'next/head'
import Main from '../components/Main/Main'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Webtronics</title>
        <meta name="description" content="test task for Webtronics" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main>
        <Main/>
      </main>
    </>
  )
}
