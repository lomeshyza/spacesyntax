import { differences } from "../data";
import { useState } from "react";
import Button from "./Button/Button";

export default function DifferencesSection() {
      const [contentType, setContentType]=useState(null)
      
      function handleClick(type) {
        setContentType(type)
    }
    return (
        <section>
         <Button isActive={contentType==='way'} onClick={()=>handleClick('way')}>Подход</Button>
         <Button isActive={contentType==='easy'} onClick={()=>handleClick('easy')}>Доступность</Button>
         <Button isActive={contentType==='program'} onClick={()=>handleClick('program')}>Концентрация</Button>
         {!contentType && <p>Нажми на кнопку</p>}
         {contentType && <p>{differences[contentType]}</p>}
        {/*  {!contentType ? (<p>Нажми на кнопку</p>) : (<p>{differences[contentType]}</p>)} */}
    </section>
    )
}