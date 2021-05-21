import { Box } from "@chakra-ui/layout"
import React from "react"

const Container = ({ children }: any) => {
  return (
    <Box width="1440px" margin="auto">
      {children}
    </Box>
  )
}

export default Container
