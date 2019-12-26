import React from "react"

import { graphql } from 'gatsby'
import Layout from "../components/layout"
import HeroSection from "../components/reusable/HeroSection";
import Infoblock from "../components/reusable/Infoblock";
import Dualinfoblock from "../components/reusable/Dualinfoblock";
import Coursecart from "../components/Cart/Coursecart";
import Bundlecart from "../components/Cart/Bundlecart";
import SEO from "../components/seo"


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home"/>
    <HeroSection
    img={data.img.childImageSharp.fluid}
      title="I write Code"
      subtitle="learncodeonline.in"
      heroclass="hero-background"
    
    ></HeroSection>
    <Infoblock heading="About Us" btnCond="true"/>
    <Coursecart courses={data.courses}/>
    <Bundlecart bundles={data.bundles}/>

    <Dualinfoblock heading="Our Team" Imgsrc="https://cdn.pixabay.com/photo/2017/12/28/12/31/sketch-3045125_960_720.jpg"/>
  </Layout>
)

export const query = graphql`
{  
    img: file(relativePath: { eq: "heromain.png" }) {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 250) {
             ...GatsbyImageSharpFluid_tracedSVG
            }
          }
    }
    courses:allContentfulCourses{
        edges{
          node{
            id
            title
            price
            category
            description{
              description
            }
            image{
             
              fixed(width:200, height:120){
                ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }     
    }
    bundles:allContentfulBundles{
      edges{
        node{
          id
          title
          price
          image{
            fixed(width:200, height:120){
              ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }     
  }
}`


export default IndexPage
