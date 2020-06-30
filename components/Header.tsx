import { FunctionComponent, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { TABLET_BREAKPOINT } from '../lib/constants'
import NavLinks from './NavLinks'

type IProps = {
  projects: Project[]
}

const Header: FunctionComponent<IProps> = ({ projects = [] }) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const match = router.query && (router.query.project as string)

  return (
    <>
      <div id="mobileNav" className={isOpen ? 'open' : ''}>
        <NavLinks selectedLink={match} links={projects} />
      </div>
      <header>
        <Link href="/">
          <a>
            <h1 className="logo">{process.env.NEXT_PUBLIC_SITE_TITLE}</h1>
          </a>
        </Link>
        <a id="navMenuButton" onClick={() => setIsOpen((state) => !state)}>
          Menu
        </a>
        <NavLinks
          className="project-links"
          selectedLink={match}
          links={projects}
        />
      </header>
      <style jsx>{`
        #mobileNav {
          height: 0px;
          display: none;
          overflow: hidden;
          transition: height 0.2s ease-in-out;
        }

        #mobileNav.open {
          height: 450px;
        }

        #navMenuButton {
          cursor: pointer;
          display: none;
        }

        header {
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
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            width: 100%;
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
