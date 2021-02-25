import './font.css'
import './global.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import Header from '../components/Header'
import Layout from '../components/Layout'
import * as gtag from '../lib/gtag'
import { ContactSnippet } from '../components/Contact'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const height = window.innerHeight
    document.documentElement.style.setProperty(
      '--mobile-viewport',
      `${height}px`
    )
    function resetHeight() {
      document.documentElement.style.setProperty(
        '--mobile-viewport',
        `${window.innerHeight}px`
      )
    }

    window.addEventListener('resize', resetHeight)
    return () => window.removeEventListener('resize', resetHeight)
  }, [])

  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
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
      <Header projects={pageProps.projects} />
      <main data-page={pageProps.name}>
        <Component {...pageProps} />
        <ContactSnippet />
      </main>
    </Layout>
  )
}
