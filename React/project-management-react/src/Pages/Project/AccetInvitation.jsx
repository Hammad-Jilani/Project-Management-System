import { Button } from '@/components/ui/button'
import { acceptInvitation } from '@/Redux/Project/Action'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

function AccetInvitation() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  

  function handleAcceptInvitation() {
    const urlParam = new URLSearchParams(location.search)
    const token = urlParam.get('token')
    dispatch(acceptInvitation({  token, navigate }))
  }

  return (
    <div className='h-[85vh] flex flex-col justify-center items-center'>
      <h1 className='py-5 font-semibold text-xl'>You are invited to join the project</h1>
      <Button onClick={handleAcceptInvitation}>Accept Invitation</Button>
    </div>
  )
}

export default AccetInvitation
