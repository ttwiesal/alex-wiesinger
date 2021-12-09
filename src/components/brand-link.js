import * as React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, Button, LightMode } from "@chakra-ui/react"

const BrandLink = ({ iconName, text, link, color }) => (
  <LightMode>
    <Link href={link} isExternal>
      <Button colorScheme={color} width="100%">
        <FontAwesomeIcon icon={["fab", iconName]} />
        {text}
      </Button>
    </Link>
  </LightMode>
)

BrandLink.propTypes = {
  iconName: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
}

export default BrandLink
