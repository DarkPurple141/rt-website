import { FunctionComponent } from 'react'

import { TABLET_BREAKPOINT } from '../lib/constants'

const Layout: FunctionComponent = ({ children }) => (
  <div id="app">
    {children}
    <style jsx>{`
      #app {
        display: flex;
        flex-direction: row;
        flex-flow: nowrap;
        padding: 50px;
      }

      @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
        #app {
          flex-direction: column;
          padding: 0;
        }
      }
    `}</style>
  </div>
)

export default Layout
