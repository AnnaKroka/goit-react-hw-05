import { Link } from "react-router-dom"
import s from "./Navigation.module.css"

const Navigation = () => {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
    </header>
  )
}

export default Navigation