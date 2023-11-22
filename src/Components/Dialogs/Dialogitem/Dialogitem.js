import { Link } from 'react-router-dom'
import s from '../Dialogs.module.css'

export const DialogItem = (props) => {
	return (
		<Link to={`/dialogs/${props.id}`}>
			<div className={s.dialog + ' ' + s.active}>{props.name}</div>
		</Link>
	)
}
