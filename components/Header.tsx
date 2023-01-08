import { FunctionComponent, useState, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { TABLET_BREAKPOINT } from '../lib/constants'

import NavLinks from './NavLinks'
import Contact from './Contact'

type IProps = {
  projects: Project[]
}

const Header: FunctionComponent<IProps> = ({ projects = [] }) => {
  const router = useRouter()
  const [height, setHeight] = useState(0)
  const ref = useRef<HTMLUListElement>(null)
  const match = router.query && (router.query.project as string)

  return (
    <>
      <div id="mobileNav" style={{ height }}>
        <NavLinks
          onClick={() => {
            setHeight(0)
          }}
          ref={ref}
          selectedLink={match}
          links={projects}
        >
          <Link href="/about" className="project-link">
            About
          </Link>
        </NavLinks>
      </div>
      <header itemScope itemType="http://schema.org/LocalBusiness">
        <div>
          <Link href="/">
            <h1 className="logo" itemProp="name">
              Retallack Thompson
            </h1>
          </Link>
          <NavLinks
            className="project-links"
            selectedLink={match}
            links={projects}
          />
        </div>
        <a
          id="navMenuButton"
          onClick={() =>
            setHeight(oldHeight => {
              if (oldHeight) {
                return 0
              }

              return ref.current?.clientHeight || 0
            })
          }
        >
          Menu
        </a>
        <div className="desktop-only">
          <p>
            <Link href="/about">About</Link>
          </p>
          <p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://instagram.com/retallackthompson"
            >
              Instagram
            </a>
          </p>
        </div>
        <Contact />
      </header>
      <style jsx>{`
        #mobileNav {
          height: 0px;
          display: none;
          overflow: hidden;
          transition: height 0.2s ease-in-out;
        }

        #navMenuButton {
          cursor: pointer;
          display: none;
        }

        header {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: inherit;
          line-height: 2em;
          min-width: 200px;
        }

        .logo {
          letter-spacing: 0.0769231em;
          margin-top: 0;
          margin-bottom: 20px;
          font-weight: inherit;
          font-size: inherit;
        }

        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          header {
            padding: 20px;
            flex-direction: row;
            width: 100%;
          }

          .logo {
            font-size: inherit;
            margin: 0;
          }

          #navMenuButton {
            display: block;
          }

          #mobileNav {
            display: block;
            padding: 0;
            line-height: 2.5;
            font-size: 18px;
            text-align: center;
            color: rgba(241, 238, 234, 0.7);
            background-color: #a3a3a3;
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}

export default Header
