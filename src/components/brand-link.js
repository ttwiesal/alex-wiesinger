import * as React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const BrandLink = ({ iconName, text, link }) => (
  <div>
    <FontAwesomeIcon icon={["fab", iconName]} />
    <a href={link}>{text}</a>
  </div>
)

BrandLink.propTypes = {
  iconName: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
}

export default BrandLink
