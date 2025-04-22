import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { TrashIcon } from '@radix-ui/react-icons'
import React from 'react'

function CommentCard() {
  return (
    <div className='flex justify-between'>
      <div className='flex items-center gap-4'>
        <Avatar>
          <AvatarFallback>Z</AvatarFallback>
        </Avatar>
      </div>
      <div className='space-y-1'>
      <p>Code With Zosh</p>
      <p>How much more work is depending</p>
      </div>
      <Button className="rounded-full" variant="ghost"><TrashIcon></TrashIcon></Button>
    </div>
  )
}

export default CommentCard