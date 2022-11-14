import React, { use } from "react";
import { useForm } from "react-hook-form";
import { FormElemContainer, InputContainer } from "./styles";
import InputFields from "components/Inputs/InputField";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { toast, ToastContainer } from 'react-nextjs-toast'

const LoginForm = () => {
    const router = useRouter();

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) =>  {
        event.preventDefault();
        const { username, password } = data;
        
        const result = await signIn("credentials", {
            redirect: false,
            username,
            password
        });
        if (result.error) {
            toast.notify(result.error, {
                duration: 5,
                type: "error"
              })
        }
        if (!result.error) {
            router.replace('/')
        }

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%'}}>
            <FormElemContainer>
                <InputContainer>
                    <p>Username</p>
                    <InputFields type="text" label="Enter your username" formValue="username" register={register}/>
                </InputContainer>
                <InputContainer>
                    <p>Password</p>
                    <InputFields type="password" label="password" formValue="password" register={register}/>
                </InputContainer>
                <button type="submit" >Sign in</button>
                <ToastContainer color={'red'}/>
            </FormElemContainer>
        </form>
    )
}

export default LoginForm;