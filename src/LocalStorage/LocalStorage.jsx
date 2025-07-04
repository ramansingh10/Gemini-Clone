import { parse } from "postcss";

export const saveUserToLocalStorage = (newUser) => {
  // Get existing users array (if any)
  const existing = JSON.parse(localStorage.getItem('users')) || [];

  const emailExists = existing.some(
    (user) => user.email.toLowerCase() === newUser.email.toLowerCase()
  );

  if(emailExists){
    alert("User with this email already exist. Please Login")
    return false;
  }

  // Add the new user
  existing.push(newUser);

  // Save back to localStorage
  localStorage.setItem('users', JSON.stringify(existing));

  return true;
};



export const checkUserToLocalStorage = (data)=>{
    const user = JSON.parse(localStorage.getItem('users')) ||[];

   const matchedUser =  user.find((user)=>
    user.email.toLowerCase()===data.email.toLowerCase() &&
    user.password === data.password
   )
   if(matchedUser){
    localStorage.setItem('loggedInUser',JSON.stringify(matchedUser));
    return {success:true, user:matchedUser};
   }else{
    return{success:false, message:'Invalid email or password'}
   }
}