import { connect } from 'react-redux'
import {
	followAC,
	setCurrentPageAC,
	setUsersAC,
	setUsersTotalCountAC,
	unfollowAC
} from '../../Redux/users-reducer'
import React from 'react'
import axios from 'axios'
import Users from './Users'

class UsersContainer extends React.Component {
	componentDidMount() {
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
			)
			.then((response) => {
				this.props.setUsers(response.data.items)
				this.props.setTotalUsersCount(response.data.totalCount)
			})
	}

	onPageHandler = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
			)
			.then((response) => {
				this.props.setUsers(response.data.items)
			})
	}

	render() {
		return (
			<Users
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageHandler={this.onPageHandler}
				users={this.props.users}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
			/>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId))
		},
		unfollow: (userId) => {
			dispatch(unfollowAC(userId))
		},
		setUsers: (user) => {
			dispatch(setUsersAC(user))
		},
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentPageAC(pageNumber))
		},
		setTotalUsersCount: (totalCount) => {
			dispatch(setUsersTotalCountAC(totalCount))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)