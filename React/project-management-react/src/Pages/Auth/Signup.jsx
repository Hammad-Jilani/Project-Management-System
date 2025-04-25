import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input';
import { register } from '@/Redux/Auth/Action';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';

function Signup() {
  const dispatch = useDispatch()
  const form = useForm({
    defaultValues:{
      email:"",
      password:"",
      fullName:""
    }
  })

  function onSubmit(data){
    dispatch(register(data))
    console.log(data);
    
  }

  return (
    <div className='space-y-5'>
      <h1 className='text-3xl'>Register</h1>
      <Form {...form}>
        <form className='space-y-2' onSubmit={form.handleSubmit(onSubmit)}>

        <FormField control={form.control} name="fullName" render={({field})=>(
          <FormItem>
            <FormControl>
              <Input {...field} type="text" className="border w-full border-gray-500 py-5 px-5" placeholder="Full Name">
              </Input>
            </FormControl>
          </FormItem>
        )}/>

          <FormField control={form.control} name="email" render={({field})=>(
            <FormItem>
              <FormControl>
                <Input {...field} type="text" className="border w-full border-gray-500 py-5 px-5" placeholder="Email">
                </Input>
              </FormControl>
            </FormItem>
          )}>
          </FormField>

          <FormField control={form.control} name="password" render={({field})=>(
            <FormItem>
              <FormControl>
                <Input {...field} type="text" className="border w-full border-gray-500 py-5 px-5" placeholder="Password">
                </Input>
              </FormControl>
            </FormItem>
          )}/>

          <Button type="submit" className="w-full mt-5">
            Register
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default Signup