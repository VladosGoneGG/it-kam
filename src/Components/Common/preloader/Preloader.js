import React from 'react'
import preloader from '../../../assets/images/my-loader.svg'

export default function Preloader(props) {
	return (
		<div>
			<img alt='loading' src={preloader} />
		</div>
	)
}
