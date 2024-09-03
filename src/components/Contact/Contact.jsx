import { BsFillPersonFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css"
import { useDispatch} from "react-redux";
import { apiDeleteContacts } from "../../redux/contactsOps";

const Contact = ({ name, number, id, }) => {
	const dispatch = useDispatch();
	const onDeleteContact = (contactId) => {
		dispatch(apiDeleteContacts(contactId));
		
	};
	
	return (
		<li className={css.contactWrapper}>
			<ul className={css.contactList}>
				<li className={css.contactItem}>
					<BsFillPersonFill />
					{name}
				</li>
				<li className={css.contactItem}>
					<BsTelephoneFill />
					{number}
				</li>
			</ul>
			<button onClick={()=> onDeleteContact(id) }
				type='button'
				className={css.contactBtn}
			>
				delete
			</button>
		</li>
	);
};

export default Contact;
