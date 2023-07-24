'use server';
import { db } from '@vercel/postgres';
import { revalidateTag } from "next/cache";

export const addUserToDatabase= async(newUser)=>{
  const client = await db.connect();
  
  await fetch('https://invito-teal.vercel.app/api/post-users',
  {
    method:'POST',
  body: JSON.stringify(newUser),
  headers:{
    'Content-Type': 'application/json'
  },
  }
  );

 
  
  revalidateTag('users')
  }
  
  
 