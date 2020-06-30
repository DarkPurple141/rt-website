import { FunctionComponent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

type IProps = {
  projects: Project[]
}

const Header: FunctionComponent<IProps> = ({ projects = [] }) => {
  const router = useRouter()
  const match = router.query && router.query.project

  return (
    <>
      <header>
        <Link href="/">
          <a>
            <h1 className="logo">{process.env.NEXT_PUBLIC_SITE_TITLE}</h1>
          </a>
        </Link>
        <ul className="project-links">
          {projects.map((p) => (
            <li key={p.href}>
              <Link href="/[project]" as={p.href}>
                <a
                  className={
                    match === p.href ? 'project-link active' : 'project-link'
                  }
                >
                  {p.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/about">
          <a id="about">About</a>
        </Link>
      </header>
      <style jsx>{`
        header {
          min-width: 200px;
        }

        .logo {
          margin-top: 0;
          margin-bottom: 20px;
          font-weight: inherit;
          font-size: inherit;
        }

        header > * {
          margin-bottom: 20px;
        }

        .project-link {
          line-height: 2em;
          padding: 0.2em 0;
        }
      `}</style>
    </>
  )
}

export default Header
