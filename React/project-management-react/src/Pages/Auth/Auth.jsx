import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import Signup from './Signup'
import Login from './Login'
import './Auth.css'

function Auth() {
  const [active,setActive] = useState(true)
  return (
    <div className='loginContainer'>
      <div className='box h-[30rem] w-1/2 m-auto'>
        <div className='minContainer login'>
          <div className="loginBox mt-10 w-4/5 px-10 space-y-5">
            {
              active?<Signup/>:<Login/>
            }
          </div>
          <div className=' w-4/5 flex justify-center items-center flex-col mt-5'>
            <span>
              Already have an account?
            </span>
            <Button variant="ghost" onClick={()=>setActive(!active)}>{active?'Sign in':'Sign up'}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth