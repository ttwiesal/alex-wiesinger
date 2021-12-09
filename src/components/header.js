import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Heading, Button } from "@chakra-ui/react"

const Header = ({ siteTitle }) => {
  return (
    <header
      style={{
        background: `deeppink`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <Heading style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </Heading>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
