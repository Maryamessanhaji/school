import Courses from "../Courses/Courses";
import Header from "./components/header/Header";
import Years from "./components/years/Years";

import Styles from './Home.module.css';

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Years />
      <Courses/>
    </div>
  );
}



