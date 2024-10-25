import Image from "next/image";
import User from "./Component/User/User";
import Link from "next/link";



export default function Home() {
  return (
    <>
    <a href="/About">ABOUT US</a>
    <Link href="/About">About Link</Link>
    <User/>
    </>
    
  );
}
