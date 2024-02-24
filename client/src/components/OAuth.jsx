import React from 'react';
import { Button } from 'flowbite-react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseApp } from '../firebase';
import { signInSuccess } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function OAuth() {
const auth = getAuth(firebaseApp);
const dispatch = useDispatch();
const navigate = useNavigate();

const handleGoogleClickOAuth = async () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  try {
    const resultsFromGoogle = await signInWithPopup(auth, provider);
     console.log(resultsFromGoogle)
    const response = await fetch("/api/auth/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: resultsFromGoogle.user.displayName,
        email: resultsFromGoogle.user.email,
        googlePhotoUrl: resultsFromGoogle.user.photoURL,
      }),
    });

    const data = await response.json();
    console.log("data",data);
    if (response.ok) {
      dispatch(signInSuccess(data));
      navigate("/");
    }
  } catch (error) {
    console.log(error);
  }
};
  return (
    <Button 
        type='button' 
        gradientDuoTone='pinkToOrange' 
        outline 
        onClick={handleGoogleClickOAuth}>
    <AiFillGoogleCircle className='w-6 h-6 mr-2 '/>
    Continue with Google
    </Button>
  )
}
