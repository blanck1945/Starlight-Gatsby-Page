import { RouterInterface } from "../interfaces/RouterInterface"

const router: RouterInterface[] = [
  {
    name: "home",
    path: "/",
    header: "Home",
    navigation: true,
  },
  {
    name: "news",
    path: "/news",
    header: "News",
    navigation: true,
  },
  {
    name: "game",
    path: "/game",
    header: "Game",
    navigation: true,
  },
  {
    name: "characters",
    path: "/characters",
    header: "Characters",
    navigation: true,
  },
  {
    name: "disclaimer",
    path: "/disclaimer",
    header: "Disclaimer Page",
    navigation: false,
  },
]

export default router
