import Contact from '../Contact/Contact';
import ModalConfirm from '../ModalConfirm/ModalConfirm';

import {useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css'
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { selectIsConfirmModalOpen, selectContactToDelete } from '../../redux/contacts/selectors';
import { closeConfirmModal } from '../../redux/contacts/slice';
import { deleteContact } from '../../redux/contacts/operations';

export default function ContactList() {
    const dispatch = useDispatch();

    const isModalOpen = useSelector(selectIsConfirmModalOpen);
    const contactToDelete = useSelector(selectContactToDelete);
    const contacts = useSelector(selectFilteredContacts);

    const handleConfirmDelete = () => {
        dispatch(deleteContact(contactToDelete.id));
        dispatch(closeConfirmModal());
    };

    const handleCancel = () => {
        dispatch(closeConfirmModal());
    }

    return (
        <div className={css.container}>
            {<ul className={css.list}>
                {contacts.map((contact) => (
                    <li className={css.item} key={contact.id}>
                        <Contact contact={contact} />
                    </li>
                ))}
            </ul>}
            {isModalOpen && contactToDelete && (<ModalConfirm contact={contactToDelete} onConfirm={handleConfirmDelete} onCancel={handleCancel} />)}
        </div>
    );
}