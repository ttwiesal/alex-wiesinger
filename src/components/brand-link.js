import * as React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./brand-link.scss"

const BrandLink = ({ iconName, text, link }) => (
  <a href={link} className={iconName} target="_blank" rel="noreferrer noopener">
    <FontAwesomeIcon fixedWidth={true} icon={["fab", iconName]} />
    {text}
  </a>
)

BrandLink.propTypes = {
  iconName: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
}

export default BrandLink
