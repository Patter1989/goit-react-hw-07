import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/filter/filter.selectors";



const ContactList = () => {
	const users = useSelector((state) => state.contacts.contacts);
	const searchedContact = useSelector(selectFilter);
	const filteredContacts = users.filter((contact) =>
		contact.name.toLowerCase().includes(searchedContact.toLowerCase())
	);
	
	
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

