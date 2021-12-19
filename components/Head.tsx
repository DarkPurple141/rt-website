import Head from 'next/head'
import { FunctionComponent } from 'react'

interface IProps {
  title: string
  imageUrl: string
  id?: string
  description?: string
}

const HeadBase: FunctionComponent<IProps> = ({
  title,
  imageUrl,
  id,
  description,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <link
        rel="canonical"
        href={`${process.env.NEXT_PUBLIC_BASE_URL}/${id}`}
      />
      <meta property="og:title" content={`${title} — Retallack Thompson`} />
      <meta
        key="og:url"
        property="og:url"
        content={`${process.env.NEXT_PUBLIC_BASE_URL}/${id}`}
      />
      {imageUrl && (
        <>
          <meta key="twitter-image" name="twitter:image" content={imageUrl} />
          <meta key="og-image" property="og:image" content={imageUrl} />
        </>
      )}
      {description && (
        <>
          <meta key="description" name="description" content={description} />
          <meta
            key="og:description"
            property="og:description"
            content={description}
          />
          <meta name="twitter:description" content={description} />
        </>
      )}
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
    </Head>
  )
}

export default HeadBase
