import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import AppRouter from './component/appRouter';
import Navbar from './component/UI/navbar/navbar';
import { AuthContext } from './context/context';

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setIsLoading(false)
  }, [])

  return (
    <div className='app'>
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth,
        isLoading
      }}>
        <BrowserRouter>
          <Navbar />
          <div className='app__content'>
            <AppRouter />
          </div>
        </BrowserRouter >
      </AuthContext.Provider>
    </div >
  )
}
export default App;

