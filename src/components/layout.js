import * as React from "react"
import PropTypes from "prop-types"

import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <div class="stars-1"></div>
      <div class="stars-2"></div>
      <div class="stars-3"></div>

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
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
