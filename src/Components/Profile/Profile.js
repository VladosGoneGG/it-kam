import { Profileinfo } from './Profileinfo/Profileinfo'
import MyPostsContainer from './MyPosts/MyPostContainer'

export const Profile = () => {
	return (
		<div className='flex justify-center'>
			<Profileinfo />
			<MyPostsContainer />
		</div>
	)
}
