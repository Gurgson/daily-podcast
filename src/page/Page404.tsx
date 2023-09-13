import { useNavigate } from "react-router-dom";
import Headline from "../components/Headline.tsx/Headline"
import Section from "../components/Sections/Section/Section"
import {useState,useEffect} from "react"

const Page404 = () => {
  const [timer, setTimer] = useState<number>(6);
  const navigate = useNavigate();
  useEffect(()=>{
    timer > 0 && setTimeout(()=>setTimer(timer - 1),1000)
    timer === 0 && navigate("/");
  },[timer, navigate])
  
    return (
    <Section>
      <Headline main="Did you get lost?" sub={`We will take from there in ${timer} seconds`}/>
    </Section>
  )
}

export default Page404