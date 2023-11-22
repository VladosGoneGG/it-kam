import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'

let store = {
	getState() {
		return this._state
	},
	_callSubscriber() {
		console.log('State changed')
	},
	subscribe(observer) {
		this._callSubscriber = observer
	},
	dispatch(action) {
		this._state = profileReducer(this._state.profilePage, action)
		this._state = dialogsReducer(this._state.dialogsPage, action)
		this._state = sidebarReducer(this._state.sidebarPage, action)

		this._callSubscriber(this._state)
	}
}

export default store
window.store = store
