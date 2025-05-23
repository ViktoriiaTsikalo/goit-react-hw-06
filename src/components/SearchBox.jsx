import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../redux/filtersSlice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  return (
    <div>
      <p className={s.searchText}>Find contacts by name</p>
      <input
        className={s.searchInput}
        type="text"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
