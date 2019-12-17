import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Onboarding = () => (
  <Layout>
    <SEO title="Onboarding Details - Address" />
    <h1>Checkout</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Done</Link>
    <Link to="/onboarding/summary/">Back</Link>
  </Layout>
)

export default Onboarding
