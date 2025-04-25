import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input';
import { login } from '@/Redux/Auth/Action';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';

function Login() {
  const dispatch=useDispatch()

  const form = useForm({
    defaultValues:{
      email:"",
      password:""
    }
  })

  function onSubmit(data){
    dispatch(login(data))
    console.log('Login ',data);
  }

  return (
    <div className='space-y-5'>
      <h1 className='text-3xl'>Login</h1>
      <Form {...form}>
        <form className='space-y-2' onSubmit={form.handleSubmit(onSubmit)}>
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
            Login
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default Login