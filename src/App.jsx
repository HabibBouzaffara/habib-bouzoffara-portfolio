import { BrowserRouter, Route, Routes, Link } from "react-router-dom"; // <-- Add Link import

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  StarsCanvas,
} from "./components";
import Quiz from "./components/Quiz";

const HomePage = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Projects />

      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />{" "}
        <div className='text-center py-4'>
          {/* Link to the quiz page */}
          <Link to='/quiz'>
            <button className='bg-tertiary text-white p-3 rounded-md'>
              Go to Quiz
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter basename='/habib-bouzoffara-portfolio'>
      <Routes>
        {/* Route for the main page */}
        <Route path='/' element={<HomePage />} />

        {/* Route for the quiz page */}
        <Route path='/quiz' element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
