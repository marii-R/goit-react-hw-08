import css from "./Contact.module.css";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.container}>
      <p className={css.name}>{name}</p>
      <p className={css.number}>{number}</p>
      <button className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}