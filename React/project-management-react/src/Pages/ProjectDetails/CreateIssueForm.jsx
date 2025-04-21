import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react'
import { useForm } from 'react-hook-form'

function CreateIssueForm() {
  const form = useForm({
    defaultValues:{
      issueName:"",
      description:""
    }
  })

  function onSubmit(data){
    console.log("create project data ",data);
    
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