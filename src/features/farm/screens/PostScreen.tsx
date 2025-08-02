import { useState } from "react";
import PostIntro from "../components/PostIntro";
import PostChat from "../components/PostChat";
import PostForm from "../components/PostForm";

export default function PostScreen(){
  const [step,setStep] = useState('chat');
  return(
    <>
    {step === 'chat' && <PostChat onComplete={() => setStep('form')} />}
    {step === 'form' && <PostForm onChat={() => setStep('chat')} />}                            
    </>
  )
}