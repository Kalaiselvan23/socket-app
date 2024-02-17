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
import { UserContextType, UserDataType } from '@/types'
import { UserContext } from '@/contexts/UserContext'

type LoginInputs = {
    username: string,
    password: string,
}

const Login = () => {
    const { User, setUser } = useContext<UserContextType>(UserContext)
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<LoginInputs>();

    const loginMutation = useMutation({
        mutationFn: (data: LoginInputs) => {
            return Api.post("/auth/login", data) // returning the promise here
        },
        onSuccess: (data) => {
            console.log(data.data);
            setUser({
                isLogin:true,
                username:data.data.username,
            })
            console.log(User);
            navigate("/");
        },
        onError: (err) => {
            console.log(err);
        }
    })

    const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
        console.log(data)
        const res = await loginMutation.mutateAsync({ ...data })
        console.log(res)
        console.log(User)
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
                            <Input id="passwordl" type="password" {...register('password')} />
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

export default Login;
