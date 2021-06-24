import { ApolloClient, gql, InMemoryCache } from '@apollo/client'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ClientLoad, Main } from '../components'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Weather App for client" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ClientLoad>
          <Main/>
        </ClientLoad>
      </main>
    </div>
  )
}