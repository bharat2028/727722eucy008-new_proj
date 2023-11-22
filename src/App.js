import React from 'react'
import Signup from './Signup'
import SignInSide from './Login'
import Dashboard from './Dash'
const func1 = () =>{
  if(window.location.pathname==='/')
  return <Signup/>
}
const func2 = () =>{
  if(window.location.pathname==='/Login')
  return <SignInSide/>
}
const func3 = () =>{
  if(window.location.pathname==='/Dash')
  return <Dashboard/>
}
const App = () => {
  return (
    <div>
    {func1()}
    {func2()}
    {func3()}

    </div>
  )
}

export default App