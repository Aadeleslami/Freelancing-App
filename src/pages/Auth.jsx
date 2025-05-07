import React from 'react'
import SendOTPForm from '../features/authentication/SendOTPForm'
import CheckOTPForm from '../features/authentication/CheckOTPForm'
import AuthContainer from '../features/authentication/AuthContainer'

function Auth() {
  return (
<div className='flex justify-center pt-10'>
<AuthContainer/>
</div>
  )
}

export default Auth