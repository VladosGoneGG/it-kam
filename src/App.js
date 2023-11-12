import { Header } from './Components/Header/Header'
import { Navbar } from './Components/Navbar/Navbar'
import { Profile } from './Components/Profile/Profile'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import { Dialogs } from './Components/Dialogs/Dialogs'
import { News } from './Components/News/News'
import { Music } from './Components/Music/Music'
import { Settings } from './Components/Settings/Settings'

function App() {
	return (
		<BrowserRouter>
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
						<Route path='/dialogs/*' element={<Dialogs />} />
						<Route path='/news/*' element={<News />} />
						<Route path='/music/*' element={<Music />} />
						<Route path='/settings/*' element={<Settings />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
