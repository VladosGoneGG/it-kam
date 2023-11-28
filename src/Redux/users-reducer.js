const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_PAGE = 'SET_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
	users: [
		// {
		// 	id: 1,
		// 	photoUrl:
		// 		'http://www.pict.ru/images/avatars/avatar-face-in-round2.gif',
		// 	followed: false,
		// 	fullName: 'Dmitry',
		// 	status: 'i am boss',
		// 	location: { city: 'Minsk', country: 'Belarus' }
		// },
		// {
		// 	id: 2,
		// 	photoUrl:
		// 		'http://www.pict.ru/images/avatars/avatar-face-in-round2.gif',
		// 	followed: true,
		// 	fullName: 'Sasha',
		// 	status: 'I like anime',
		// 	location: { city: 'Moscow', country: 'Russia' }
		// },
		// {
		// 	id: 3,
		// 	photoUrl:
		// 		'http://www.pict.ru/images/avatars/avatar-face-in-round2.gif',
		// 	followed: false,
		// 	fullName: 'Andrew',
		// 	status: 'I learn React',
		// 	location: { city: 'Kiev', country: 'Ukraine' }
		// }
	],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFeching: false,
	followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map((u) => {
					if (u.id === action.userId) {
						return { ...u, followed: true }
					}
					return u
				})
			}

		case UNFOLLOW:
			return {
				...state,
				users: state.users.map((u) => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					}
					return u
				})
			}
		case SET_USERS: {
			return { ...state, users: action.users }
		}
		case SET_PAGE: {
			return { ...state, currentPage: action.currentPage }
		}

		case SET_TOTAL_USERS_COUNT: {
			return { ...state, totalUsersCount: action.count }
		}

		case TOGGLE_IS_FETCHING: {
			return { ...state, isFeching: action.isFeching }
		}

		case TOGGLE_IS_FOLLOWING_PROGRESS: {
			return {
				...state,
				followingInProgress: action.isFeching
					? [...state.followingInProgress, action.userId]
					: [
							state.followingInProgress.filter(
								(id) => id !== action.userId
							)
					  ]
			}
		}

		default:
			return state
	}
}
export const follow = (userId) => ({
	type: FOLLOW,
	userId
})

export const unfollow = (userId) => ({
	type: UNFOLLOW,
	userId
})

export const setUsers = (users) => ({
	type: SET_USERS,
	users
})

export const setCurrentPage = (currentPage) => ({
	type: SET_PAGE,
	currentPage
})

export const setUsersTotalCount = (setUsersTotalCount) => ({
	type: SET_TOTAL_USERS_COUNT,
	count: setUsersTotalCount
})

export const toggleIsFetching = (isFeching) => ({
	type: TOGGLE_IS_FETCHING,
	isFeching
})

export const toggleFollowingProgress = (isFeching, userId) => ({
	type: TOGGLE_IS_FOLLOWING_PROGRESS,
	isFeching,
	userId
})

export default usersReducer
