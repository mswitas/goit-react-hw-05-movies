import PropTypes from "prop-types"
import css from "./Searchbar.module.css";

export const Searchbar = ({ handleSubmit }) => {
    return (
        <div>
            <form onSubmit={handleSubmit} className={css.form}>
                <input type="text" name="movie" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

Searchbar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

