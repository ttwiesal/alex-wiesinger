import * as React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, Button } from "@chakra-ui/react"

const BrandLink = ({ iconName, text, link, color }) => (
  <Link href={link} isExternal>
    <Button colorScheme={color} width="100%">
      <FontAwesomeIcon icon={["fab", iconName]} />
      {text}
    </Button>
  </Link>
)

BrandLink.propTypes = {
  iconName: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
}

export default BrandLink
