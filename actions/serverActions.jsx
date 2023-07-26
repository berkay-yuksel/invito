'use server';

import { revalidateTag } from "next/cache";
export const addUserToDatabase= async(newUser)=>{
 
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
  
  
  export const getUsersList= async(response)=>{
 
    await fetch("https://invito-teal.vercel.app/api/get-users ", {
      cache: "no-cache",
      next: {
        tags: ["users"],
      },
    });
   

    revalidateTag("users");

    return await res.json({users});
  }

    /* 
http://localhost:3000/api/get-users 

https://invito-teal.vercel.app/api/get-users
*/