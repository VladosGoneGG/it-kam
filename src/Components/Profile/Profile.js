import { Profileinfo } from './Profileinfo/Profileinfo'
import MyPostsContainer from './MyPosts/MyPostContainer'

export const Profile = (props) => {
	return (
		<div className='flex justify-center gap-10'>
			<Profileinfo profile={props.profile} />
			<MyPostsContainer />
		</div>
	)
}
