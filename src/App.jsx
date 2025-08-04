import "./App.css";
import { Routes, Route } from "react-router";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>

      {/* <div className="min-h-screen w-full relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </div> */}
    </>
  );
}

export default App;
