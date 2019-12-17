import React from "react"
import Container from "@material-ui/core/Container"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import MuiLink from "@material-ui/core/Link"
import Link from "../components/link"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Let's get it sorted in less than two minutes
        </Typography>
        <form noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Your Name" />
        </form>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/about" color="secondary">
          Go to the about page
        </Link>
        <MuiLink color="inherit" href="https://material-ui.com/">
          Your Website
        </MuiLink>{" "}
        <Link to="/onboarding/">Get Started</Link> <br />
        <Link to="/page-2/">Go to page 2</Link>
      </Box>
    </Container>
  </Layout>
)

export default IndexPage
