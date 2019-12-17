import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Onboarding = () => (
  <Layout>
    <SEO title="Onboarding Details - Name and Date of Birth" />
    <h1>Enter your Name and DOB</h1>
    <p>Welcome to page 2</p>
    <Link to="/onboarding/address">Continue</Link>
  </Layout>
)

export default Onboarding
