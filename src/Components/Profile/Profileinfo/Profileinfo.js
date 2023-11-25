import Preloader from '../../Common/preloader/Preloader'
import s from './Profileinfo.module.css'
export const Profileinfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}

	return (
		<div className='flex-col'>
			<div>
				<img
					className=' w-52'
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Star_Wars_characters_at_Madame_Tussaud.jpg/1200px-Star_Wars_characters_at_Madame_Tussaud.jpg'
					alt='star'
				/>
			</div>
			<div className={s.discriptionBlock}>
				<img alt={'userPhoto'} src={props.profile.photos.large} />
				ava + description
			</div>
		</div>
	)
}
