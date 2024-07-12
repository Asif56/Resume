import { Container, Grid } from "@mui/material";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
// import Resume from './pages/Resume/Resume';
// import Portfolio from './pages/Portfolio/Portfolio';
import Footer from "./components/Footer/Footer";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   useLocation
// } from "react-router-dom";
// import {Router} from 'react-router'
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Resume from "./pages/Resume/Resume";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  // const router = createBrowserRouter(routes);
  return (
    <Container className={"top_60"}>
      <Grid container spacing={7}>
        <Grid item sm={12} xs={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Header />
          <div className="main_content">
            <Routes>
              <Route path="/" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </div>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
