import { useDispatch, useSelector } from 'react-redux';
import { setNameFilter } from '../../redux/filtersSlice';
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);

  return (
    <div className={css.container}>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.input}
        id="text"
        type="text"
        value={filter}
        onChange={(e) => dispatch(setNameFilter(e.target.value))}
      />
    </div>
  );
}