/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function withAuth(Component:any){
  return function withAuth(props:any){
    const session=false;
    useEffect(()=>{
     if(!session){
      redirect("/login")
     }
    },[]);
    if(!session){
      return null
    }

    return <Component {...props} />
  }
}