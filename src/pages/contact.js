import React from "react"

import { graphql } from 'gatsby'
import Layout from "../components/layout"
import HeroSection from "../components/reusable/HeroSection";
import Infoblock from "../components/reusable/Infoblock";
import Contact from "../components/Contact";
import SEO from "../components/seo"

const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Home"/>
    <HeroSection
    img={data.img.childImageSharp.fluid}
      title="Contact Us"
      
      heroclass="about-background"
    
    ></HeroSection>
    
    
    <Infoblock heading="How Can we help?" btnCond="false"/>
    <Contact/>
    
  </Layout>
)

export const query = graphql`
{  
    img: file(relativePath: { eq: "contact.png" }) {
          childImageSharp {
            fluid {
             ...GatsbyImageSharpFluid_tracedSVG
            }
          }
    }
}`


export default ContactPage
