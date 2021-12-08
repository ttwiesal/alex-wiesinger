import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss"
import { Chakra } from "./chakra"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Chakra>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 320,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
          <footer
            style={{
              marginTop: `2rem`,
            }}
          >
            © {new Date().getFullYear()}, Alexander Wiesinger
          </footer>
        </div>
      </Chakra>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
