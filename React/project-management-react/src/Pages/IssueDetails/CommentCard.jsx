import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { deleteComment } from '@/Redux/Comment/Action'
import { TrashIcon } from '@radix-ui/react-icons'
import React from 'react'
import { useDispatch } from 'react-redux'

function CommentCard({item}) {
  const dispatch = useDispatch()
  function handleDelete() {
    dispatch(deleteComment(item.id))
  }
  return (
    <div className='flex justify-start gap-14'>
      <div className='flex items-center gap-4'>
        <Avatar>
          <AvatarFallback>{item.user.fullName[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className='space-y-1'>
        <p>{item.user.fullName}</p>
        <p>{item.content}</p>
      </div>
      <Button onClick={handleDelete} className="rounded-full" variant="ghost"><TrashIcon></TrashIcon></Button>
    </div>
  )
}

export default CommentCard