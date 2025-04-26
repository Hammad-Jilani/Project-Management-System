import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { createComment } from '@/Redux/Comment/Action';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';

function CreateCommentForm({issueId}) {
  const dispatch = useDispatch()

  const form = useForm({
    defaultValues:{
      content:""
    }
  })

  function onSubmit(data){
    dispatch(createComment({content:data.content,issueId}))
    console.log(data);
    
  }
  return (
    <Form {...form}>
      <form className='flex gap-2' onSubmit={form.handleSubmit(onSubmit)} >
        <FormField name="content" control={form.control} render={({field})=>
          <FormItem >

            <div className="flex gap-2">
              <div>
                <Avatar>
                  <AvatarFallback>Z</AvatarFallback>
                </Avatar>
              </div>
              <FormControl  >
                <Input {...field} type="text" className="w-[20rem]" placeholder="Add Comment Here..." ></Input>
              </FormControl>
            </div>
            
            <FormMessage/>
          </FormItem>
        }>
          
        </FormField>

        <Button type="submit">
          Save
        </Button>
      </form>

    </Form>
  )
}

export default CreateCommentForm