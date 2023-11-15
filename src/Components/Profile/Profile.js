import { Profileinfo } from './Profileinfo/Profileinfo'
import { MyPosts } from './MyPosts/MyPosts'

export const Profile = (props) => {
	return (
		<div>
			<Profileinfo />
			<MyPosts
				posts={props.posts}
				newPostText={props.newPostText}
				dispatch={props.dispatch}
			/>
		</div>
	)
}
