import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Loader } from "components/Loader/Loader";
import css from "./SharedLayout.module.css";

export const SharedLayout = () => {
  return (
    <div>
          <header className={css.mainHeader}>
            <nav className={css.mainMenu}>
                <NavLink className={css.menuLink} to="/">Home</NavLink>
                <NavLink className={css.menuLink} to="/movies">Movies</NavLink>
            </nav>      
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  )
}
