import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList,TabsTrigger } from '@/components/ui/tabs'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CreateCommentForm from './CreateCommentForm'
import CommentCard from './CommentCard'
import { SelectItem,Select, SelectTrigger, SelectValue ,SelectContent} from '@/components/ui/select'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { useDispatch, useSelector } from 'react-redux'
import { fetchIssuesById, updateIssueStatus } from '@/Redux/Issue/Action'
import { fetchComments } from '@/Redux/Comment/Action'


function IssueDetails() {
  const {projectId,issueId} = useParams()
  const dispatch = useDispatch()
  const {issue,comment} = useSelector(store=>store)

  function handleUpdateIssueStatus(status){
    dispatch(updateIssueStatus({id:issueId,status}))
    console.log(status);
    
  }
  useEffect(()=>{
    dispatch(fetchIssuesById(issueId))
    dispatch(fetchComments(issueId))
  },[issueId])
  return (
    <div className='px-20 py-8 text-gray-400'>
      <div className='flex justify-between border p-10 rounded-lg'>
        <ScrollArea className="h-[80vh] w-[60%]">
          <div>
            <h1 className='text-lg font-semibold text-gray-400'>{issue.issueDetails?.title}</h1>
            <div className='py-5'>
              <h2 className='font-semibold text-gray-400'>Description :</h2>
              <p className='text-gray-400 text-sm mt-3'>{issue.issueDetails?.description}</p>
            </div>
            <div className='mt-5'>
              <h1 className='pb-3'>Activity</h1>
              <Tabs defaultValue="comments" className="w-[400px]">
                <TabsList className="mb-5">
                  <TabsTrigger value='all'>
                    All
                  </TabsTrigger>
                  <TabsTrigger value='comments'>
                    Comments
                  </TabsTrigger>
                  <TabsTrigger value='history'>
                    History
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                  All Make Changes to your account
                </TabsContent>
                <TabsContent value="comments">
                  <CreateCommentForm issueId={issueId}></CreateCommentForm>
                  <div className='mt-8 space-y-6'>
                    {
                      comment.comments.map((item)=><CommentCard item={item} key={item}></CommentCard>)
                    }
                  </div>
                </TabsContent>
                <TabsContent value="history">
                  History Change Your Password Here
                </TabsContent>
                
              </Tabs>
            </div>
          </div>
        </ScrollArea>
        <div className='w-full lg:w-[30%] space-y-2'>
          <Select onValueChange={handleUpdateIssueStatus}>
            <SelectTrigger>
              <SelectValue placeholder="TO DO"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="in_progress">In Progress</SelectItem>
              <SelectItem value="done">Done</SelectItem>
            </SelectContent>
          </Select>
          <div className='border rounded-lg'>
            <p className='border-b py-3 px-5'>Details</p>
            <div className='p-5'>
              <div className='space-y-7'>
                <div className='flex gap-10 items-center'>
                  <p className='w-[7rem]'>Assignee</p>
                  {
                    issue.issueDetails?.assignee?.fullName ? <div className='flex items-center gap-3'>
                    <Avatar className='h-8 w-8 text-xs'>
                      <AvatarFallback>{issue.issueDetails?.assignee?.fullName[0]}</AvatarFallback>
                    </Avatar>
                    <p>{issue.issueDetails?.assignee?.fullName}</p>
                  </div>    : <p>Unassigned</p>
                  }      
                         
                </div>
              </div>
            </div>

            <div className='p-5'>
              <div className='space-y-7'>
                <div className='flex gap-10 items-center'>
                  <p className='w-[7rem]'>Labels</p>       
                  <p>None</p>         
                </div>

                <div className='flex gap-10 items-center'>
                  <p className='w-[7rem]'>Status</p>       
                  <Badge variant="ghost">{issue.issueDetails?.status}</Badge>         
                </div>

                <div className='flex gap-10 items-center'>
                  <p className='w-[7rem]'>Release</p>       
                  <p>23-04-2025</p>         
                </div>

                <div className='flex gap-10 items-center'>
                  <p className='w-[7rem]'>Reporter</p>       
                  <div className='flex items-center gap-3'>
                    <Avatar className='h-8 w-8 text-xs'>
                      <AvatarFallback>R</AvatarFallback>
                    </Avatar>
                    <p>Raam</p>
                  </div>           
                </div>

              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default IssueDetails