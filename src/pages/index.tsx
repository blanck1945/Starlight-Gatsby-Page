import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../layout/Layout"
import { Box, Flex } from "@chakra-ui/layout"

const IndexPage = () => (
  <Layout>
    <Box
      width="100%"
      height="100vh"
      backgroundColor="green.300"
      alignContent="center"
      justifyContent="center"
    >
      <Flex alignContent="center" justifyContent="center">
        <StaticImage src="../images/home/main_desktop.png" alt="Main-bg" />
      </Flex>
    </Box>
  </Layout>
)

export default IndexPage
