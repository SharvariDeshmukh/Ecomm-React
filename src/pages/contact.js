  
import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import HeroSection from "../components/reusable/HeroSection";
import Infoblock from "../components/reusable/Infoblock";
import Dualinfoblock from "../components/reusable/Dualinfoblock";
import Teamphotosection from "../components/About/Teamphotosection";
import SEO from "../components/seo"

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home"/>
    <HeroSection
    img={data.img.childImageSharp.fluid}
      title="I write Code"
      
      heroclass="about-background"
    
    ></HeroSection>
    
    <Dualinfoblock heading="Message from the CEO" Imgsrc="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
    <Infoblock heading="About Our Vision" btnCond="false"/>
    <Teamphotosection/>
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
