import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input';
import React from 'react'
import { useForm } from 'react-hook-form'

function CreateForm() {
  const form = useForm(
    // resolver:
    {
      defaultValues:{
        name:"",
        description:"",
        category:"",
        tags:["javascript","react"]
      }
    },
  )
  function onSubmit(data){
    console.log("create project data",data);
  }
  return (
    <div>
      <Form  {...form}>
        <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField control={form.control} name="name" render={({field})=>
            <FormItem>
              <FormControl>
                <Input {...field} type="text" className="border w-full border-gray-700 py-5 px-5" placeholder="Project Name ..."></Input>
              </FormControl>
              <FormMessage/>
            </FormItem>}>
          </FormField>

          <FormField control={form.control} name="description" render={({field})=>
            <FormItem>
              <FormControl>
                <Input {...field} type="text" className="border w-full border-gray-700 py-5 px-5" placeholder="Description ..."></Input>
              </FormControl>
              <FormMessage/>
            </FormItem>}>
          </FormField>

        </form>
        <DialogClose>
          {false?<div className='mt-3 text-center w-full'><p>You Can Create Only 3 Projects</p></div>:<Button type="submit" className="w-full mt-3">Create Project</Button>}
        </DialogClose>
      </Form>
    </div>
  )
}

export default CreateForm