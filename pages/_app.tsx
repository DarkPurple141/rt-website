import './global.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/Header'
import Layout from '../components/Layout'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header projects={pageProps.projects}></Header>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  )
}
