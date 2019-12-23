import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import HeroSection from "../components/reusable/HeroSection";
import Infoblock from "../components/reusable/Infoblock";
import SEO from "../components/seo"

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home"/>
    <HeroSection
    img={data.img.childImageSharp.fluid}
      title="I write Code"
      subtitle="learncodeonline.in"
      heroclass="hero-background"
    
    ></HeroSection>
    <Infoblock heading="About Us"/>
  </Layout>
)

export const query = graphql`
{  
    img: file(relativePath: { eq: "about.png" }) {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 250) {
             ...GatsbyImageSharpFluid_tracedSVG
            }
          }
    }
}`


export default AboutPage
