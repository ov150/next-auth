"use client"

import { useEffect } from "react";

export default function Home() {
  console.log("server");
  useEffect(()=>{
    console.log("i am with client components");
  },[])
  return (
    <>
    Home page
    </>
  );
}
