import Courses from "../Courses/Courses";
import Header from "./components/header/Header";
import Years from "./components/years/Years";

import Styles from './Home.module.css';
// const {body} = styles
export default function Home() {
  return (
    <div className={`container dark:${Styles.body}`}>
      <Header />
      <Years />
      <Courses/>
    </div>
  );
}



