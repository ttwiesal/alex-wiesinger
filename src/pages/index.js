import * as React from "react"

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

const brands = [
  {
    iconName: "github",
    text: " Github",
    link: "https://github.com/ttwiesal",
    color: "black",
  },
  {
    iconName: "xing",
    text: " Xing",
    link: "https://www.xing.com/profile/Alexander_Wiesinger4/cv",
    color: "green",
  },
  {
    iconName: "linkedin",
    text: " LinkedIn",
    link: "https://www.linkedin.com/in/alexander-wiesinger-589b4399/",
    color: "blue",
  },
  {
    iconName: "instagram",
    text: " Instagram",
    link: "https://www.instagram.com/ttwiesal/",
    color: "pink",
  },
]

const brandLinks = []
for (let brand of brands) {
  brandLinks.push(
    <BrandLink
      iconName={brand.iconName}
      text={brand.text}
      link={brand.link}
      color={brand.color}
      key={brand.text}
    />
  )
}

const IndexPage = () => (
  <>
    <center>
      <h1>Hi people 👋</h1>
    </center>

    {brandLinks}
  </>
)

export default IndexPage
