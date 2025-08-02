import { useState } from "react";
import PostIntro from "../components/PostIntro";
import PostForm from "../components/PostForm";
import PostChat from "../components/PostChat";


export default function PostScreen(){
  const [step,setStep] = useState('chat');
  console.log("🚀 ~ PostScreen ~ step:", step)
  return(
    <>
    {step === 'chat' && <PostChat onComplete={() => setStep('form')} />}
    {step === 'form' && <PostForm onChat={() => setStep('chat')} />}                            
    </>
  )
}