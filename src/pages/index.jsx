import { unstable_getServerSession } from "next-auth/next";
import { authenticate } from "./api/auth/[...nextauth]";
import Gallery from "pages-sections/Gallery/Gallery";
import Header from "components/Header";

export default function Home() {
  return (
    <div >
      <Header />
      <Gallery />
    </div>
  )
}

export async function getServerSideProps({ req, res }) {
  const session = await unstable_getServerSession(req, res, authenticate);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}