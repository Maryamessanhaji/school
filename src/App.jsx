
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import CourseDescription from "./pages/coutsedetails/CourseDescription";
import YearCard from "./pages/Home/components/years/YearCard";
import Years from "./pages/Home/components/years/Years";
function App() {
  return (
    <>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courseDescription" element={<CourseDescription />} />
            <Route path="/yearCard" element={<YearCard />} />
            <Route path="/years" element={<Years />} />
          </Route>
        </Routes>
        <Footer />  
      </BrowserRouter>
    </>
  );
}

export default App;
