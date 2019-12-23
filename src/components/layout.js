/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Navbar from "./reusable/Navbar"
import Footer from "./reusable/Footer"


import "./bootstrap.min.css"
import "./layout.css"

const Layout= ({children})=>(
  <>
  <Navbar/>
  {children}
  <Footer/>
  
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
