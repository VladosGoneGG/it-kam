import s from './Dialogs.module.css'
import { DialogItem } from './Dialogitem/Dialogitem'
import { Message } from './Message/Message'

export const Dialogs = (props) => {
	const DialogsEl = props.dialogsPage.dialogs.map((el) => {
		return <DialogItem id={el.id} key={el.id} name={el.name} />
	})

	const MessageEl = props.dialogsPage.message.map((el) => {
		return <Message id={el.id} key={el.id} message={el.message} />
	})

	const onSendMassageHandler = () => {
		props.sendMessageCreator()
	}

	const onNewMessageChange = (event) => {
		let body = event.target.value
		props.updateNewMessageBodyCreator(body)
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>{DialogsEl}</div>
			<div className={s.messages}>
				<div>{MessageEl}</div>
				<div>
					<div>
						<textarea
							value={props.dialogsPage.newMessageBody}
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
