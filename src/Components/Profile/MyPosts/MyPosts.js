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
		props.addPost()
	}

	const onPostChange = () => {
		let text = newPostElement.current.value
		props.updateNewPostTextActionCreator(text)
	}

	return (
		<div>
			<div>
				<h3>My posts</h3>
				<div>{postEl}</div>
				<div>
					<textarea
						onChange={onPostChange}
						ref={newPostElement}
						value={props.newPostText}
					/>
				</div>
				<div>
					<button
						onClick={addPost}
						className='px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
					>
						Add post
					</button>
				</div>
			</div>
		</div>
	)
}
