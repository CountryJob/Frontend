import { useState } from "react";
import PostIntro from "../components/PostIntro";
import PostChat from "../components/PostChat";
import PostForm from "../components/PostForm";

export default function PostScreen(){
  const [step,setStep] = useState('intro');
  return(
    <>
    {step === 'intro' && <PostIntro onStart={() => setStep('chat')} />}
    {step === 'chat' && <PostChat onComplete={() => setStep('form')}
                                  onIntro={() => setStep('intro')}  />}
    {step === 'form' && <PostForm onChat={() => setStep('chat')} />}                            
    </>
  )
}