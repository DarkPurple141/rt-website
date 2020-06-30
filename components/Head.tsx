import Head from 'next/head'
import { FunctionComponent } from 'react'

interface IProps {
  title: string
  imageUrl: string
  id: string
}

const HeadBase: FunctionComponent<IProps> = ({ title, imageUrl, id }) => {
  return (
    <Head>
      <title>{title}</title>
      <link
        rel="canonical"
        href={`${process.env.NEXT_PUBLIC_BASE_URL}/${id}`}
      />
      <meta property="og:title" content={`${title} — Retallack Thompson`} />
      <meta
        property="og:url"
        content={`${process.env.NEXT_PUBLIC_BASE_URL}/${id}`}
      />
      <meta property="og:image" content={imageUrl} />
      <meta itemProp="name" content={`${title} — Retallack Thompson`} />
      <meta
        itemProp="url"
        content={`${process.env.NEXT_PUBLIC_BASE_URL}/${id}`}
      />
      <meta name="twitter:title" content={`${title} — Retallack Thompson`} />
      <meta
        name="twitter:url"
        content={`${process.env.NEXT_PUBLIC_BASE_URL}/${id}`}
      />
      <meta name="twitter:card" content="summary" />
      <meta
        name="description"
        content="Retallack Thompson are Sydney-based architects seeking to create timeless and enduring architecture, interior and landscape design."
      />
    </Head>
  )
}

export default HeadBase
