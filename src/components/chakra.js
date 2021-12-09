import * as React from "react"
import "@fontsource/raleway/400.css"
import "@fontsource/open-sans/700.css"
import { ChakraProvider, DarkMode } from "@chakra-ui/react"
import theme from "../theme"

export function Chakra({ cookies, children }) {
  return (
    <ChakraProvider theme={theme}>
      <DarkMode>{children}</DarkMode>
    </ChakraProvider>
  )
}
