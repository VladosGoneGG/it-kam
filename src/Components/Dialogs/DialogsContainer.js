import {
	sendMessageCreator,
	updateNewMessageBodyCreator
} from '../../Redux/dialogs-reducer'
import { Dialogs } from './Dialogs'
import { connect } from 'react-redux'

// export const DialogsContainer = (props) => {
// 	let state = store.getState().dialogsPage
// 	const onSendMassageHandler = () => {
// 		store.dispatch(sendMessageCreator())
// 	}
//
// 	const onNewMessageChange = (body) => {
// 		store.dispatch(updateNewMessageBodyCreator(body))
// 	}
//
// 	return (
// 		<Dialogs
// 			updateNewMessageBodyCreator={onNewMessageChange}
// 			sendMessageCreator={onSendMassageHandler}
// 			dialogsPage={store.getState().dialogsPage}
// 		/>
// 	)
// }
let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		sendMessageCreator: () => {
			dispatch(sendMessageCreator())
		},
		updateNewMessageBodyCreator: (body) => {
			dispatch(updateNewMessageBodyCreator(body))
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
