import { Link } from "react-router-dom";
import css from "./Home.module.css";
export default function Home() {
  return (
    <section className={css.container}>
      <div className={css.page}>
        <h1 className={css.titel}>Campers of your dreams</h1>
        <p className={css.text}>
          You can find everything you want in our catalog
        </p>
        <Link to={"/catalog"}>
          <button type="button" className={css.button}>
            View Now
          </button>
        </Link>
      </div>
    </section>
  );
}
