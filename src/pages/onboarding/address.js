import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Onboarding = () => (
  <Layout>
    <SEO title="Onboarding Details - Address" />
    <h1>Address</h1>
    <p>Welcome to page 2</p>
    <Link to="/onboarding/summary">Continue</Link>
    <Link to="/onboarding/">Back</Link>
  </Layout>
)

export default Onboarding
