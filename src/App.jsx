import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import LazyLoadComponent from "./components/LazyLoadComponent";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <LazyLoadComponent><Navbar/></LazyLoadComponent>
          <LazyLoadComponent><Hero/></LazyLoadComponent>
        </div>
        <LazyLoadComponent>
          <About />
        </LazyLoadComponent>
        <LazyLoadComponent>
          <Experience />
        </LazyLoadComponent>
        <LazyLoadComponent>
          <Tech />
        </LazyLoadComponent>
        <LazyLoadComponent>
          <Works />
        </LazyLoadComponent>

        <LazyLoadComponent>
          <Feedbacks />
        </LazyLoadComponent>

        <div className="relative z-0">
          <LazyLoadComponent>
            <Contact />
          </LazyLoadComponent>
          <LazyLoadComponent>
            <StarsCanvas />
          </LazyLoadComponent>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
