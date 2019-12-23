import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import HeroSection from "../components/reusable/HeroSection";
import Infoblock from "../components/reusable/Infoblock";
import Dualinfoblock from "../components/reusable/Dualinfoblock";
import Corousel from "../components/Services/Corousel";
import SEO from "../components/seo"

const ServicesPage = ({data}) => (
  <Layout>
    <SEO title="Home"/>
    <HeroSection
    img={data.img.childImageSharp.fluid}
      title="I write Code"
      
      heroclass="contact-background"
    
    ></HeroSection>
    
    <Dualinfoblock heading="Costumer First" Imgsrc="https://cdn.pixabay.com/photo/2016/02/24/01/52/butterfly-1218884__340.jpg"/>
    <Infoblock heading="Projects so far" btnCond="false"/>
    <Corousel/>
    <Infoblock heading="Connect with Us" btnCond="true"/>
  </Layout>
)

export const query = graphql`
{  
    img: file(relativePath: { eq: "services.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 250) {
             ...GatsbyImageSharpFluid_tracedSVG
            }
          }
    }
}`


export default ServicesPage

