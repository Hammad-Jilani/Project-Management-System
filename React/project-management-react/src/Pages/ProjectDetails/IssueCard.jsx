import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem,DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { DotsVerticalIcon, PersonIcon } from '@radix-ui/react-icons'
import React from 'react'
import UserList from './UserList'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteIssue } from '@/Redux/Issue/Action'

function IssueCard({item,projectId}) {
  const dispatch = useDispatch()
  function handleIssueDelete(){
    dispatch(deleteIssue(item.id))
  }
  return (
    <Card className="rounded-md py-1 pb-2">
      <CardHeader className="flex justify-between items-center">
        <CardTitle><Link to={`/project/${projectId}/issue/${item.id}`}>{item.title}</Link></CardTitle>
        <div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className="rounded-full" size="icon" variant="ghost"><DotsVerticalIcon></DotsVerticalIcon></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>In Progress</DropdownMenuItem>
            <DropdownMenuItem>Done</DropdownMenuItem>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem onClick={handleIssueDelete}>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent className="py-0">
        <div className='flex items-center justify-between'>
          <p>FBP - {1}</p>
          <DropdownMenu className="w-[30rem] border border-red-400">
            <DropdownMenuTrigger>
              <Button className="bg-gray-900 hover:text-black text-white rounded-full" size="icon">
                <Avatar>
                  <AvatarFallback>
                    <PersonIcon></PersonIcon>
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <UserList issueDetails={item}></UserList>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>     
    </Card>
  )
}

export default IssueCard