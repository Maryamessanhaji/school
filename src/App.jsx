
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Footer from "./components/Footer";
import CourseDescription from "./pages/CourseDescription";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courseDescription" element={<CourseDescription />} />
          </Route>
        </Routes>
        <Footer />  
      </BrowserRouter>
    </>
  );
}

export default App;
