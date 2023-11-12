export const Post = (props) => {
	return (
		<div>
			<div>{props.message}</div>
			<p>{props.likesCount}</p>
		</div>
	)
}
