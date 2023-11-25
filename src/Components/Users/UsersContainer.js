import { connect } from 'react-redux'
import {
	follow,
	setCurrentPage,
	setUsers,
	setUsersTotalCount,
	toggleIsFetching,
	unfollow
} from '../../Redux/users-reducer'
import React from 'react'
import axios from 'axios'
import Users from './Users'
import Preloader from '../Common/preloader/Preloader'

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true)
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
			)
			.then((response) => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(response.data.items)
				this.props.setUsersTotalCount(response.data.totalCount)
			})
	}

	onPageHandler = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		this.props.toggleIsFetching(true)
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
			)
			.then((response) => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(response.data.items)
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
		isFeching: state.usersPage.isFeching
	}
}

export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setUsersTotalCount,
	toggleIsFetching
})(UsersContainer)
