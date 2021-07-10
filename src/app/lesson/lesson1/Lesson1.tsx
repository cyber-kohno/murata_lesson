import { useState ,useEffect} from "react";
import InputNumber from "./InputNumber";

const Lesson1 = () => {

    const [correctAnswer,setAnswer] = useState(0);

    useEffect(() => {
        setAnswer(Math.floor( Math.random() * 100 ) + 1)
    },[])

    return (
        <div className="kazuate">
            <h2>数あてゲーム</h2>
            <p>{correctAnswer}</p>
            <div id="resalt"></div>
            <InputNumber correctAnswer={correctAnswer}/>
        </div>
    );
}

export default Lesson1;