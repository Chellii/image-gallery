import { unstable_getServerSession } from "next-auth";
import AuthenticationLayout from "pages-sections/authentication/AuthenticationLayout";
import LoginForm from "pages-sections/authentication/LoginForm";
import { authenticate } from "../api/auth/[...nextauth]";

const Login = () => {
    return (
        <AuthenticationLayout title="Welcome Back" subTitle="Welcome back! Please enter your details">
            <LoginForm/>
        </AuthenticationLayout>
    )
}

export default Login;

export async function getServerSideProps({ req, res }) {
    const session = await unstable_getServerSession(req, res, authenticate);
  
    if (session) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  
    return {
      props: {},
    };
  }
  