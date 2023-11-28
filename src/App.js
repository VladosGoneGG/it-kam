import { Navbar } from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import { Music } from './Components/Music/Music'
import { Settings } from './Components/Settings/Settings'
import DialogsContainer from './Components/Dialogs/DialogsContainer'
import UsersContainer from './Components/Users/UsersContainer'
import ProfileContainer from './Components/Profile/Profileinfo/ProfileContainer'
import HeaderContainer from './Components/Header/HeaderContainer'

function App() {
	return (
		<div className='bg-blue-500'>
			<div className='md:container md:mx-auto flex-col bg-slate-200'>
				<div className=' flex justify-end bg-cyan-200'>
					<HeaderContainer />
				</div>
				<div>
					<Navbar />
				</div>
				<div>
					<Routes>
						<Route
							path='/profile/:userId?'
							element={<ProfileContainer />}
						/>
						<Route
							path='/dialogs/*'
							element={<DialogsContainer />}
						/>
						<Route path='/users/*' element={<UsersContainer />} />
						<Route path='/music/*' element={<Music />} />
						<Route path='/settings/*' element={<Settings />} />
					</Routes>
				</div>
			</div>
		</div>
	)
}

export default App
