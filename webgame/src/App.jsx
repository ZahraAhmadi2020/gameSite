import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import 'react-clock/dist/Clock.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Pages/Dashboard';
import Profile from './components/Pages/Profile';

import UserProfile from './components/Pages/UserProfile';
import UseContextProvider from './store/UseContext';
function App() {


  return (
    <Fragment>
      <UseContextProvider>


          <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/profile' element={<Profile />}>

          </Route>
          <Route path='/profile/userProfile' element={<UserProfile/>}>

          </Route>


          </Routes>

      </UseContextProvider>


    </Fragment>
  )
}

export default App
