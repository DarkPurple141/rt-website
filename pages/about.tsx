import { GetStaticProps } from 'next'
import { FunctionComponent } from 'react'
import { RichText } from 'prismic-reactjs'

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
        <RichText render={doc} />
      </div>
      <style jsx>
        {`
          .image {
            margin-bottom: 20px;
          }

          img {
            width: inherit;
          }

          @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
            .article {
              margin-left: 8em;
            }
          }
        `}
      </style>
    </>
  )
}

export default About
