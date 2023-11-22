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
		<div className='flex gap-3 mt-3'>
			<div>{DialogsEl}</div>
			<div>
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
						<button
							className='px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
							onClick={onSendMassageHandler}
						>
							Send
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
