import s from './Dialogs.module.css'
import { DialogItem } from './Dialogitem/Dialogitem'
import { Message } from './Message/Message'
import { useRef } from 'react'

export const Dialogs = (props) => {
	const DialogsEl = props.dialogs.map((el) => {
		return <DialogItem id={el.id} name={el.name} />
	})

	const MessageEl = props.message.map((el) => {
		return <Message id={el.id} message={el.message} />
	})

	const textMessage = useRef(null)

	const addMessageHandler = () => {
		console.log(textMessage.current.value)
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>{DialogsEl}</div>
			<div className={s.messages}>{MessageEl}</div>
			<div>
				<textarea ref={textMessage}></textarea>
				<button onClick={addMessageHandler}>Отправить</button>
			</div>
		</div>
	)
}
