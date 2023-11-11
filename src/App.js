import { Header } from './Components/Header/Header'
import { Navbar } from './Components/Navbar/Navbar'
import { Profile } from './Components/Profile/Profile'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import { Dialogs } from './Components/Dialogs/Dialogs'
function App() {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header name='Vlados' />
				<Navbar />
				{/*<Profile />*/}
				<div className='app-wrapper-content'>
					<Routes>
						<Route path='/profile' element={<Profile />} />
						<Route path='/dialogs' element={<Dialogs />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
