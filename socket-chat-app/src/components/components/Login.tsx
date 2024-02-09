import React, { useContext } from 'react'
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
import {TabsContent,} from "@/components/ui/tabs"
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router'
import Api from '@/Api'
import { UserContextType } from '@/types'
type LoginInputs={
    username:string,
    password:string,
}
const Login = () => {
    const {userData,setU}=useContext<UserContextType>()
    const navigate=useNavigate();
    const {register,handleSubmit}=useForm<LoginInputs>();
    const loginMutation=useMutation({
        mutationFn:(data:LoginInputs)=>{
            Api.post("/auth/login",data)
        }
    })
    const onSubmit:SubmitHandler<LoginInputs>=(data)=>{
        loginMutation.mutate({...data})

        loginMutation.isSuccess?navigate("/"):null;
    }
  return (
    <TabsContent value="Login">
                    <Card>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <CardHeader>
                            <CardTitle className="text-center">Login</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="usernameL">Username</Label>
                                <Input id="usernameL" type="text" {...register('username')} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="passwordl">Password</Label>
                                <Input id="passwordl" type="password" {...register('password')}/>
                            </div>
                        </CardContent>
                        <CardFooter >
                            <Button className="mx-auto" type="submit">Save Login</Button>
                        </CardFooter>
                        </form>
                    </Card>
                </TabsContent>
  )
}

export default Login