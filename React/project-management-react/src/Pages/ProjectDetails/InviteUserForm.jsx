import { Button } from '@/components/ui/button'
import { Dialog, DialogClose } from '@/components/ui/dialog'
import { Form, FormControl, FormItem, FormMessage,FormField } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { inviteToProject } from '@/Redux/Project/Action'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

function InviteUserForm() { 
  const dispatch = useDispatch()
  const {id} = useParams()
  let form = useForm({
    defaultValues:{
      email:""
    }
  })

  function onSubmit(data){
    dispatch(inviteToProject({email:data.email,projectId:id}))
  }
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>

        <FormField control={form.control} name="email"
          render={({field})=>
            
            <FormItem>
              <FormControl>
              <Input {...field} type={"text"} placeholder="User Email"></Input>
              
              </FormControl>
              <FormMessage/>
            </FormItem>
          }
        >
          
        </FormField>
        <DialogClose>
          <Button variant={"outline"} type="submit" className={"w-full mt-5"}>Invite User Form</Button>
        </DialogClose>
      </form>

    </Form>
  )
}

export default InviteUserForm