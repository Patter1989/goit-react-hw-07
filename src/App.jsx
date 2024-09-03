import { useEffect, useState } from "react";
import Section from "./components/Section/Section.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx"
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import Modal from "./components/Modal/Modal.jsx"
import { useDispatch, useSelector } from "react-redux";
import { apiFetchContacts } from "./redux/contactsOps.js";
import Loader from "./components/Loader/loader.jsx"


const App = () => {
	const selectLoading = useSelector((state) => state.isLoading);
	const [modal, setModal] = useState(false)
	const onOpenModal = () => {
		setModal(true)
	}
	const onCloseModal = () => {
		setModal(false);
	};
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(apiFetchContacts())
	}, [dispatch]);


	return (
		<div>
			{modal && <Modal onCloseModal={onCloseModal} />}
			<h1>Phonebook</h1>
			<button
				type='button'
				onClick={onOpenModal}
			>
				Modal
			</button>
			<Section>
				<ContactForm />
			</Section>
			<Section>
				<SearchBox />
			</Section>
			{selectLoading && <Loader/>}
			<Section>
				<ContactList />
			</Section>
		</div>
	);
};

export default App;



