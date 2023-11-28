import { connect } from 'react-redux'
import {
	follow,
	setCurrentPage,
	setUsers,
	setUsersTotalCount,
	toggleIsFetching,
	toggleFollowingProgress,
	unfollow
} from '../../Redux/users-reducer'
import React from 'react'
import Users from './Users'
import Preloader from '../Common/preloader/Preloader'
import { usersAPI } from '../../api/api'

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true)

		usersAPI
			.getUsers(this.props.currentPage, this.props.pageSize)
			.then((data) => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(data.items)
				this.props.setUsersTotalCount(data.totalCount)
			})
	}

	onPageHandler = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		this.props.toggleIsFetching(true)

		usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(data.items)
		})
	}

	render() {
		return (
			<>
				{this.props.isFeching ? <Preloader /> : null}
				<Users
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onPageHandler={this.onPageHandler}
					users={this.props.users}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
					toggleFollowingProgress={this.props.toggleFollowingProgress}
					followingInProgress={this.props.followingInProgress}
				/>
			</>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFeching: state.usersPage.isFeching,
		followingInProgress: state.usersPage.followingInProgress
	}
}

export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setUsersTotalCount,
	toggleIsFetching,
	toggleFollowingProgress
})(UsersContainer)
