import { forwardRef, HTMLProps } from 'react'
import Link from 'next/link'
import { TABLET_BREAKPOINT } from '../lib/constants'

type Props = {
  selectedLink: string
  links: {
    name: string
    href: string
  }[]
} & HTMLProps<HTMLUListElement>

const noop = (e: any) => undefined

const NavLinks = forwardRef<HTMLUListElement, Props>(
  ({ links, className, selectedLink, onClick = noop, children }, ref) => (
    <>
      <ul className={className} ref={ref} onClick={onClick}>
        {links.map(p => (
          <li key={p.href}>
            <Link href="/[project]" as={`/${p.href}`}>
              <a
                className={
                  selectedLink === p.href
                    ? 'project-link active'
                    : 'project-link'
                }
              >
                {p.name}
              </a>
            </Link>
          </li>
        ))}
        <li>{children}</li>
      </ul>
      <style jsx>{`
        .project-link {
          line-height: 2em;
          padding: 0.2em 0;
        }

        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          ul {
            padding: 2em 0;
          }

          .project-links {
            display: none;
          }

          .project-link.active {
            color: #f1eeea;
          }

          .project-link:hover {
            color: white;
          }
        }
      `}</style>
    </>
  )
)

export default NavLinks
