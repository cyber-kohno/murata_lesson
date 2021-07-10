import { useState } from "react";

const InputNumber = (props: any) => {

    const [answer, setAnswer] = useState(0);

    const isAnswer = () =>{
        const answer = Number(document.getElementById("answer"))
        if(props.correctAnswer === answer){
         }
    }

    return(
        <div>
            <input type="number" id="answer"/>
            <button onClick={isAnswer}>回答</button>
        </div>
    );
}

export default InputNumber;