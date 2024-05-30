import type { FC } from 'react'

import styles from './styles.module.css'

const Telephone: FC = () => (
  <p>
    <span itemProp="telephone">
      <a href="tel:+61272089080">+612 7208 9080</a>
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
  <div className={`${styles.contact} desktop-only`}>
    <address>
      <p>157 Crown Street</p>
      <p>Darlinghurst NSW 2010</p>
    </address>
    <Telephone />
    <Email />
  </div>
)

export const ContactSnippet: FC = () => (
  <footer className={`${styles.contact} ${styles.snippet} mobile-only`}>
    <Telephone />
    <Email />
  </footer>
)
export default Contact
