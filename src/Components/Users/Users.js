import styles from './users.module.css'
export const Users = (props) => {
	if (props.users.length === 0) {
		props.setUsers([
			{
				id: 1,
				photoUrl:
					'http://www.pict.ru/images/avatars/avatar-face-in-round2.gif',
				followed: false,
				fullName: 'Dmitry',
				status: 'i am boss',
				location: { city: 'Minsk', country: 'Belarus' }
			},
			{
				id: 2,
				photoUrl:
					'http://www.pict.ru/images/avatars/avatar-face-in-round2.gif',
				followed: true,
				fullName: 'Sasha',
				status: 'I like anime',
				location: { city: 'Moscow', country: 'Russia' }
			},
			{
				id: 3,
				photoUrl:
					'http://www.pict.ru/images/avatars/avatar-face-in-round2.gif',
				followed: false,
				fullName: 'Andrew',
				status: 'I learn React',
				location: { city: 'Kiev', country: 'Ukraine' }
			}
		])
	}

	return (
		<div>
			{props.users.map((u) => (
				<div key={u.id}>
					<span>
						<div>
							<img
								alt={'avatar'}
								src={u.photoUrl}
								className={styles.usersPhoto}
							/>
						</div>
						<div>
							{u.followed ? (
								<button
									onClick={() => {
										props.unfollow(u.id)
									}}
								>
									Unfollow
								</button>
							) : (
								<button
									onClick={() => {
										props.follow(u.id)
									}}
								>
									Follow
								</button>
							)}
						</div>
					</span>
					<span>
						<span>
							<div>{u.fullName}</div>
							<div>{u.status}</div>
						</span>
						<span>
							<div>{u.location.city.country}</div>
							<div>{u.location.city}</div>
						</span>
					</span>
				</div>
			))}
		</div>
	)
}
