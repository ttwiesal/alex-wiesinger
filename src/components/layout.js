import * as React from "react"
import PropTypes from "prop-types"

import "./layout.scss"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <>
      <div className="stars-1"></div>
      <div className="stars-2"></div>
      <div className="stars-3"></div>

      <div
        style={{
          maxWidth: 320,
          margin: `0 auto`,
          padding: `0 1.0875rem 1.45rem`,
          maxHeight: "100vh",
          overflowY: "auto",
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Alexander Wiesinger
          <br />
          <Link to="/imprint">Imprint</Link>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
