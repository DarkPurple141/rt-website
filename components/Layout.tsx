import { FunctionComponent } from 'react'

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

      @media screen and (max-width: 600px) {
        #app {
          padding: 20px;
        }
      }
    `}</style>
  </div>
)

export default Layout
