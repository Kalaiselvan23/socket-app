import Login from "@/components/components/Login"
import Signup from "@/components/components/Signup"

import {
    Tabs,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export default function LoginSingnup() {
    return (
        <div className="w-[100%] h-[100vh] bg-[url('/public/background.png')] bg-no-repeat bg-cover flex flex-col justify-center items-center">
            <div className="w-[40%] bg-white p-2 my-2 text-center text-2xl rounded-md">
                <h2>ChatIn</h2>
            </div>
            <Tabs defaultValue="Signup" className="w-[40%]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="Signup">Signup</TabsTrigger>
                    <TabsTrigger value="Login">Login</TabsTrigger>
                </TabsList>
                <Signup/>
                <Login/>
                
            </Tabs>
        </div>

    )
}
