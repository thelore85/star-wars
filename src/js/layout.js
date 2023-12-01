import React from "react";
import { BrowserRouter, Route, Routes, useParams  } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

// Views
import Contacts from "./views/Contacts";
import Home from "./views/Home";
import CreateContact from "./views/CreateContact";
import People from "./views/People";
import PeopleDetails from "./views/PeopleDetails";
import PlanetDetails from "./views/PlanetDetails";

// Components
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import File404 from "./views/File404";
import StarShips from "./views/StarShips";
import Planets from "./views/Planets";
import StarshipDetails from "./views/StarshipDetails";

// Context";
import { GlobalContext } from "./store/GlobalContext";
  

export default function Layout() {

  const basename = process.env.BASENAME || "";

	return (
    <GlobalContext >
      <div>
        <BrowserRouter basename={basename}>
          <ScrollToTop>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/create" element={<CreateContact />} />
              <Route path="/people" element={<People />} />
              <Route path="/starships" element={<StarShips />} />
              <Route path="/planets" element={<Planets />} />
              <Route path="/starships/:userId" element={<StarshipDetails />} />
              <Route path="/people/:userId" element={<PeopleDetails />} />
              <Route path="/planets/:userId" element={<PlanetDetails />} />
              <Route path="*" element={<File404 />} />
            </Routes>
            <Footer />
          </ScrollToTop>
        </BrowserRouter>
      </div>
    </GlobalContext>

	);
};

// export default injectContext(Layout);
