import { Box } from "@chakra-ui/layout"
import React from "react"
import Navbar from "./Navbar"

interface LayoutProps {
  children: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <Navbar />
      <main>{children}</main>
    </Box>
  )
}

export default Layout
