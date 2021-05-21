import React from "react"
import { Box, Flex, Grid } from "@chakra-ui/react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap={2}
      width="100%"
      backgroundColor="red"
    >
      <Box width="100%">Logo</Box>
      <Flex backgroundColor="blue">
        <Link to="/index">Home</Link>
        <Link to="/game">Game</Link>
        <Link to="/characters">Characters</Link>
      </Flex>
    </Grid>
  )
}

export default Navbar
