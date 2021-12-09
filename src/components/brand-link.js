import * as React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./brand-link.scss"

const BrandLink = ({ iconName, text, link }) => (
  <a href={link} class={iconName}>
    <FontAwesomeIcon icon={["fab", iconName]} />
    {text}
  </a>
)

BrandLink.propTypes = {
  iconName: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
}

export default BrandLink
