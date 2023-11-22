import {
	addPostActionCreator,
	updateNewPostTextActionCreator
} from '../../../Redux/profile-reducer'
import { MyPosts } from './MyPosts'
import { connect } from 'react-redux'

// export const MyPostsContainer = (props) => {
// 	let state = props.store.getState()
//
// 	let addPost = () => {
// 		props.store.dispatch(addPostActionCreator())
// 	}
//
// 	const onPostChange = (text) => {
// 		let action = updateNewPostTextActionCreator(text)
// 		props.store.dispatch(action)
// 	}
//
// 	return (
// 		<MyPosts
// 			updateNewPostTextActionCreator={onPostChange}
// 			addPost={addPost}
// 			posts={state.profilePage.posts}
// 			newPostText={state.profilePage.newPostText}
// 		/>
// 	)
// }

const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateNewPostTextActionCreator: (text) => {
			let action = updateNewPostTextActionCreator(text)
			dispatch(action)
		},
		addPost: () => {
			dispatch(addPostActionCreator())
		}
	}
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostContainer
