import { GetStaticProps } from 'next'
import { FunctionComponent } from 'react'
import { PrismicRichText } from '@prismicio/react'

import { getAllProjects } from '../lib/api'
import { Client } from '../lib/prismic'
import { TABLET_BREAKPOINT } from '../lib/constants'

type IProps = {
  doc: any
  image: GalleryImage['image']
}

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const { data } = await await Client().getSingle('about_page', {})
  return {
    props: {
      name: 'about_page',
      projects: await getAllProjects(),
      doc: data.body,
      image: data.hero_image,
    },
  }
}

const About: FunctionComponent<IProps> = ({ doc, image }) => {
  return (
    <>
      <div className="article">
        <div className="image">
          <img src={image.url} alt={image.alt} />
        </div>
        <PrismicRichText field={doc} />
      </div>
      <style jsx>
        {`
          .image {
            margin-bottom: 20px;
          }

          img {
            max-width: 100%;
            height: auto;
          }

          @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
            .article {
              margin-left: 8em;
              padding-bottom: calc(var(--grid-unit) * 2);
            }
          }
        `}
      </style>
    </>
  )
}

export default About
