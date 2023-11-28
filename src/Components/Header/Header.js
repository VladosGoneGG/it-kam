import { NavLink } from 'react-router-dom'

export const Header = (props) => {
	return (
		<div className=' text-black'>
			<h1>СОЦИАЛЬНАЯ СЕТЬ ДЛЯ ДЖЕДАЕВ!</h1>
			<div>
				{props.isAuth ? (
					props.login
				) : (
					<NavLink to={'/login'}>Login</NavLink>
				)}
			</div>
		</div>
	)
}
