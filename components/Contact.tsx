import type { FC } from 'react'
import { TABLET_BREAKPOINT } from '../lib/constants'

const Telephone: FC = () => (
  <p>
    <span itemProp="telephone">
      <a href="tel:+61280974246">+612 8097 4246</a>
    </span>
  </p>
)

const Email: FC = () => (
  <p>
    <span itemProp="email">
      <a href="mailto:mail@retallackthompson.com">mail@retallackthompson.com</a>
    </span>
  </p>
)

const Contact: FC = () => (
  <div className="contact desktop-only">
    <address>
      <p>157 Crown Street</p>
      <p>Darlinghurst NSW 2010</p>
    </address>
    <Telephone />
    <Email />
  </div>
)

export const ContactSnippet: FC = () => (
  <div className="snippet">
    <Telephone />
    <Email />
    <style jsx>{`
      @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
        .snippet {
          display: none;
        }
      }
    `}</style>
  </div>
)
export default Contact
