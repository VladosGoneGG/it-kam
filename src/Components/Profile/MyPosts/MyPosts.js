import s from './MyPosts.module.css'
import { Post } from '../Post/Post'
import React, { useRef } from 'react'

export const MyPosts = (props) => {
	const postEl = props.posts.map((el) => {
		return (
			<Post id={el.id} message={el.message} likesCount={el.likesCount} />
		)
	})

	const newPostElement = useRef(null)

	let addPost = () => {
		props.dispatch({ type: 'ADD-POST' })
	}

	const onPostChange = () => {
		let text = newPostElement.current.value
		props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text })
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
