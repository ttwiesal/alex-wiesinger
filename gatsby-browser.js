import * as React from "react"

import Layout from "./src/components/layout"
import { Chakra } from "./src/components/chakra"

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  return (
    <Chakra>
      <Layout {...props}>{element}</Layout>
    </Chakra>
  )
}
