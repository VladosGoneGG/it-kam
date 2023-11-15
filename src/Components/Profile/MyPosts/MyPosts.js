import s from './MyPosts.module.css'
import { Post } from '../Post/Post'
import React, { useRef } from 'react'
import {
	addPostActionCreator,
	updateNewPostTextActionCreator
} from '../../../Redux/State'

export const MyPosts = (props) => {
	const postEl = props.posts.map((el) => {
		return (
			<Post id={el.id} message={el.message} likesCount={el.likesCount} />
		)
	})

	const newPostElement = useRef(null)

	let addPost = () => {
		props.dispatch(addPostActionCreator())
	}

	const onPostChange = (newPostElement) => {
		let action = updateNewPostTextActionCreator(
			newPostElement.current.value
		)
		props.dispatch(action)
	}

	return (
		<div className={s.postsBlock}>
			<div>
				<h3>My posts</h3>
				<div>
					<textarea
						onChange={onPostChange}
						ref={newPostElement}
						value={props.newPostText}
					/>
				</div>
				<div>
					<button onClick={addPost}>Add post</button>
				</div>
			</div>
			<div className={s.posts}>{postEl}</div>
		</div>
	)
}
