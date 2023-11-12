import s from './Dialogs.module.css'
import { Link } from 'react-router-dom'

const DialogItem = (props) => {
	return (
		<Link to={`/dialogs/${props.id}`}>
			<div className={s.dialog + ' ' + s.active}>{props.name}</div>
		</Link>
	)
}

const Message = (props) => {
	return <div className={s.message}>{props.message}</div>
}

export const Dialogs = () => {
	let dialogsData = [
		{ id: 1, name: 'Vlados' },
		{ id: 2, name: 'Andrey' },
		{ id: 3, name: 'Sveta' },
		{ id: 4, name: 'Sasha' },
		{ id: 5, name: 'Viktor' },
		{ id: 6, name: 'Yasuo' }
	]

	let MessageData = [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'How you' },
		{ id: 3, message: 'Privet' },
		{ id: 4, message: 'Nasil sin' },
		{ id: 5, message: 'Yo' },
		{ id: 6, message: 'Zdarova' }
	]
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
				<DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
			</div>
			<div className={s.messages}>
				<Message message={MessageData[0].message} />
				<Message message={MessageData[1].message} />
				<Message message={MessageData[2].message} />
				<Message message={MessageData[3].message} />
				<Message message={MessageData[4].message} />
				<Message message={MessageData[5].message} />
			</div>
		</div>
	)
}
