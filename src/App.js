import { Header } from './Components/Header/Header'
import { Navbar } from './Components/Navbar/Navbar'
import { Profile } from './Components/Profile/Profile'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import { Music } from './Components/Music/Music'
import { Settings } from './Components/Settings/Settings'
import DialogsContainer from './Components/Dialogs/DialogsContainer'
import UsersContainer from './Components/Users/UsersContainer'

function App() {
	return (
		<div className='app-wrapper'>
			<div>
				<Header name='Vlados' />
			</div>
			<div>
				<Navbar />
			</div>
			<div className='app-wrapper-content'>
				<Routes>
					<Route path='/profile/*' element={<Profile />} />
					<Route path='/dialogs/*' element={<DialogsContainer />} />
					<Route path='/users/*' element={<UsersContainer />} />
					<Route path='/music/*' element={<Music />} />
					<Route path='/settings/*' element={<Settings />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
