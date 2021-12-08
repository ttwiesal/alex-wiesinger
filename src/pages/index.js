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

library.add(fab, faGithub, faInstagram, faXing, faLinkedin)

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <BrandLink
      iconName="github"
      text="Github"
      link="https://github.com/ttwiesal"
    />
    <BrandLink
      iconName="xing"
      text="Xing"
      link="https://www.xing.com/profile/Alexander_Wiesinger4/cv"
    />
    <BrandLink
      iconName="linkedin"
      text="LinkedIn"
      link="https://www.linkedin.com/in/alexander-wiesinger-589b4399/"
    />
    <BrandLink
      iconName="instagram"
      text="Instagram"
      link="https://www.instagram.com/ttwiesal/"
    />
  </Layout>
)

export default IndexPage
