import s from './Dialogs.module.css'
import { DialogItem } from './Dialogitem/Dialogitem'
import { Message } from './Message/Message'
import {
	sendMessageCreator,
	updateNewMessageBodyCreator
} from '../../Redux/State'

export const Dialogs = (props) => {
	let { dialogs, message, newMessageBody } = props.store.getState()

	const DialogsEl = dialogs.map((el) => {
		return <DialogItem id={el.id} name={el.name} />
	})

	const MessageEl = message.map((el) => {
		return <Message id={el.id} message={el.message} />
	})

	const onSendMassageHandler = () => {
		props.store.dispatch(sendMessageCreator())
	}

	const onNewMessageChange = (event) => {
		let body = event.target.value

		props.store.dispatch(updateNewMessageBodyCreator(body))
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>{DialogsEl}</div>
			<div className={s.messages}>
				<div>{MessageEl}</div>
				<div>
					<div>
						<textarea
							value={newMessageBody}
							onChange={onNewMessageChange}
							placeholder='Enter your message'
						></textarea>
					</div>
					<div>
						<button onClick={onSendMassageHandler}>Send</button>
					</div>
				</div>
			</div>
		</div>
	)
}
