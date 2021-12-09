import { extendTheme, theme as baseTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const fonts = {
  heading: "Open Sans",
  body: "Raleway, Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif",
}

const theme = extendTheme(
  {
    config,
  },
  { fonts },
  baseTheme
)

export default theme
