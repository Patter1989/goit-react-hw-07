import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/contactsReducer";



const ContactList = () => {
	const filteredContacts = useSelector(selectFilteredContacts)
	return (
		<ul  className={css.list}>
			{filteredContacts.map((contact) => (
				<Contact
					key={nanoid()}
					id={contact.id}
					name={contact.name}
					number={contact.phone}
					/>
			))}
		</ul>
	);
};
export default ContactList;

