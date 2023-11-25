import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

// Views
import Contacts from "./views/Contacts";
import Home from "./views/Home";
import CreateContact from "./views/CreateContact";

// Components
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

// Context";
import { GlobalContext } from "./store/GlobalContext";
import File404 from "./views/File404";
  

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
