import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

// Views
import Contacts from "./views/Contacts";
import CreateContact from "./views/CreateContact";

// Components
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

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
              <Route path="/" element={<Contacts />} />
              <Route path="/create" element={<CreateContact />} />
              <Route path="*" element={<h1>Not found!</h1>} />
            </Routes>
            <Footer />
          </ScrollToTop>
        </BrowserRouter>
      </div>
    </GlobalContext>

	);
};

// export default injectContext(Layout);
