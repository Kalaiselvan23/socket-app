import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    TabsContent,
} from "@/components/ui/tabs"
import Api from '@/Api'
import {MutatingDots} from "react-loader-spinner"
import { useMutation } from 'react-query'
import {SubmitHandler, useForm} from "react-hook-form"

type Inputs={
    name:string,
    email:string,
    password:string,
    isAdmin:boolean,
    image:string,
}
const Signup = () => {
    const {register,handleSubmit}=useForm<Inputs>();

    const signupMutation=useMutation({
        mutationFn:(data:Inputs)=>{
            Api.post('/auth/signup',data)
        }
    })

    const onSubmit:SubmitHandler<Inputs>=(data)=>{
      //invoking mutation here
      signupMutation.mutate({...data})
    }

    return (
        <TabsContent value="Signup">
            <Card>
                {signupMutation.isSuccess?<div className='h-96 flex justify-center items-center'>
                {/* <span>
                Signup Successful
                    </span> */}
                    <image src={"https://i.gifer.com/7efs.gif"} alt="success-img" />
                </div>
            :<form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
                <CardHeader>
                    <CardTitle className="text-center">Signup</CardTitle>
                </CardHeader>
                <CardContent >
                    <div className="space-y-1">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" defaultValue="Pedro Duarte" {...register("name")} />
                    </div><div className="space-y-1">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" defaultValue="Pedro Duarte" {...register("email")} />
                    </div><div className="space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" defaultValue="Pedro Duarte" {...register('password')}/>
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" defaultValue="@peduarte"  {...register('username')}/>
                    </div>
                </CardContent>
                <CardFooter>
                    {signupMutation.isLoading?<div className='w-full h-full flex justify-center items-center'>
                <MutatingDots
                visible={true}
                height="20"
                width="20"
                color="#"
                secondaryColor="##2BC6FE"
                radius="11.5"
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            /> 
                </div>:<Button className="mx-auto" type='submit'>Save changes</Button>}
                </CardFooter>
            </form>}
            </Card>
        </TabsContent>
    )
}

export default Signup