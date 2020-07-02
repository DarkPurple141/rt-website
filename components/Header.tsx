import { FunctionComponent, useState, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { TABLET_BREAKPOINT } from '../lib/constants'
import NavLinks from './NavLinks'

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
        <NavLinks ref={ref} selectedLink={match} links={projects}>
          <Link href="/about">
            <a className="project-link">About</a>
          </Link>
        </NavLinks>
      </div>
      <header itemScope itemType="http://schema.org/LocalBusiness">
        <div>
          <Link href="/">
            <a>
              <h1 className="logo" itemProp="name">
                {process.env.NEXT_PUBLIC_SITE_TITLE}
              </h1>
            </a>
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
            setHeight((oldHeight) => {
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
            <Link href="/about">
              <a>About</a>
            </Link>
          </p>
          <p>
            <Link href="/process">
              <a>Process</a>
            </Link>
          </p>
        </div>
        <div className="contact desktop-only">
          <address>
            <p>157 Crown Street</p>
            <p>Darlinghurst NSW 2010</p>
          </address>
          <p>
            <span itemProp="telephone">
              <a href="tel:+61280974246">+612 8097 4246</a>
            </span>
          </p>
          <p>
            <span itemProp="email">
              <a href="mailto:mail@retallackthompson.com">
                mail@retallackthompson.com
              </a>
            </span>
          </p>
        </div>
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

        .desktop-only p {
          margin: 0;
        }

        header {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: inherit;
          min-width: 200px;
        }

        .logo {
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

          .desktop-only {
            display: none;
          }

          .logo {
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
