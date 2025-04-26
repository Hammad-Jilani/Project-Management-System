import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { createIssue } from '@/Redux/Issue/Action';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';


function CreateIssueForm({status}) {
  const {id} = useParams()
  const dispatch = useDispatch()
  const form = useForm({
    defaultValues:{
      issueName:"",
      description:"",
      status
    }
  })

  function onSubmit(data){
    data.projectId = id
    dispatch(createIssue({title:data.issueName,description:data.description,projectId:id,status:status}))
    console.log("create issue data ",data);
    
  }
  return (
    <div>
      <Form {...form}>
        <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
          <FormField control={form.control} name="issueName" render={({field})=>
            <FormItem>
              <FormControl>
                <Input {...field} type="text" className="border w-full border-gray-700 py-5 px-5" placeholder="Enter Issue Name.."></Input>
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          }>
            
            
          </FormField>

          <FormField control={form.control} name="description" render={({field})=>
            <FormItem>
              <FormControl>
                <Input {...field} type="text" className="border w-full border-gray-700 py-5 px-5" placeholder="Enter description.."></Input>
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          }>            
            
          </FormField>
          <DialogClose>
              <Button variant="outline" className="w-full mt-5" type="submit">Create Issue</Button>
            </DialogClose>
        </form>
      </Form>
    </div>
  )
}

export default CreateIssueForm