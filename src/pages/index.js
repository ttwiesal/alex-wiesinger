import * as React from "react"

import Layout from "../components/layout"
import BrandLink from "../components/brand-link"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  fab,
  faGithub,
  faInstagram,
  faLinkedin,
  faXing,
} from "@fortawesome/free-brands-svg-icons"
import { VStack } from "@chakra-ui/react"

library.add(fab, faGithub, faInstagram, faXing, faLinkedin)

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <VStack align="stretch">
      <BrandLink
        iconName="github"
        text="Github"
        link="https://github.com/ttwiesal"
        color="black"
      />
      <BrandLink
        iconName="xing"
        text="Xing"
        link="https://www.xing.com/profile/Alexander_Wiesinger4/cv"
        color="green"
      />
      <BrandLink
        iconName="linkedin"
        text="LinkedIn"
        link="https://www.linkedin.com/in/alexander-wiesinger-589b4399/"
        color="blue"
      />
      <BrandLink
        iconName="instagram"
        text="Instagram"
        link="https://www.instagram.com/ttwiesal/"
        color="pink"
      />
    </VStack>
  </Layout>
)

export default IndexPage
