import s from './Header.module.css'
export const Header = (props) => {
	return (
		<div className={s.head}>
			<h1>Hello,{props.name}!</h1>
		</div>
	)
}
