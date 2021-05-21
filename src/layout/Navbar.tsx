import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Box, Flex, Grid } from "@chakra-ui/react"
import { Link } from "gatsby"
import router from "../data/router"
import { RouterInterface } from "../interfaces/RouterInterface"

const Navbar = () => {
  const routerLinks = router.map((route: RouterInterface, index: number) => {
    if (route.navigation) {
      return <Link to={route.path}>{route.header}</Link>
    }
  })

  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      maxWidth="100%"
      height="84px"
      backgroundColor="gray.400"
    >
      <Box width="100%">
        <StaticImage src="../images/img-logo.png" alt="Logo" width={200} />
      </Box>
      <Flex>{routerLinks}</Flex>
    </Grid>
  )
}

export default Navbar
