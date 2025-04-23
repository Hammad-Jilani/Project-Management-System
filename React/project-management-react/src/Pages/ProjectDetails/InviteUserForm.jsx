import { Button } from '@/components/ui/button'
import { Dialog, DialogClose } from '@/components/ui/dialog'
import { Form, FormControl, FormItem, FormMessage,FormField } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'

function InviteUserForm() {
  let form = useForm({
    defaultValues:{
      email:""
    }
  })

  function onSubmit(){

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