import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./nav";
import { About } from "./page/about";
import { Footer } from "./page/footer";
import { Home } from "./page/home";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
