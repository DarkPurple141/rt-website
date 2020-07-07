import './font.css'
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
        <meta
          property="og:site_name"
          content={process.env.NEXT_PUBLIC_SITE_TITLE}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="Retallack Thompson Architects is a Sydney-based architecture firm seeking to create timeless and enduring architecture, interior and landscape design."
        />
      </Head>
      <Header projects={pageProps.projects}></Header>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  )
}
