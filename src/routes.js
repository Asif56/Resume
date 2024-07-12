import App from "./App";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";

export const routes=[
    {path:"/",element:<Resume/>},
    {path:"/portfolio",element:<Portfolio/>},
]