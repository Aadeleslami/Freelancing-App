import React from 'react'
import SendOTPForm from '../features/authentication/SendOTPForm'

function Auth() {
  return (
<div className='flex justify-center pt-10'>
<div className='w-full sm:max-w-sm'>
        <SendOTPForm/>
    </div>
</div>
  )
}

export default Auth