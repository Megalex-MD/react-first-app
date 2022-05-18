import React, { useContext } from "react"
import MyButton from "../component/UI/button/MyButton"
import MyInput from "../component/UI/input/MyInput"
import { AuthContext } from "../context/context"

const Login = () => {
  const { setIsAuth } = useContext(AuthContext)


  const login = event => {
    event.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
  }

  return (
    <div>
      <form onSubmit={login}>
        <MyInput type='text' placeholder='Login' />
        <MyInput type='password' placeholder='Password' />
        <MyButton>Login</MyButton>
      </form>
    </div>
  )
}

export default Login