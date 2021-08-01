import { useEffect, useReducer } from "react";
import { useState } from "react";
import { VFC } from "react";
import styled, { css } from "styled-components";
import { NumberLiteralType } from "typescript";
import Button from "../component/Button";
import { _Hide, _Record, _Text } from "../component/Style";
import { PlayStatus, ResultBean } from "../Sample2";

type History = { len: 'under' | 'over', input: number };

const Play = (props: {
    transitionResult: (resultBean: ResultBean) => void,
    range: number
}) => {

    const [tryCnt, setTryCnt] = useState<number>(0);
    const [min, setMin] = useState<number>(0);
    const [max, setMax] = useState<number>(0);
    const [correct, setCorrect] = useState<number>(0);
    const [userInput, setUserInput] = useState<string>('');
    const [message, setMessage] = useState<JSX.Element>();

    const [histories, addHistories] = useReducer((list: History[], record: History) => {
        const ret = list.slice();
        ret.push(record);
        return ret;
    }, [] as History[]);

    useEffect(() => {
        setTryCnt(1);
        setMin(0);
        setMax(props.range);
        setCorrect(Math.floor(Math.random() * props.range));
    }, [props.range]);

    useEffect(() => {
        updateMessage();
    }, [tryCnt]);

    const updateMessage = () => {
        setMessage(
            <div>
                <_Text color="#0600a6">Please! input number...</_Text><br />
                Try: [<_Text color="#a60000">{tryCnt}</_Text>]<br />
                Min: [<_Text color="#a60000">{min}</_Text>]～Max: [<_Text color="#a60000">{max}</_Text>]<br />
                <_Hide opacity={0.1}>correct: [<_Text color="#0600a6">{correct}</_Text>]</_Hide>
            </div>
        );
    }

    const isInputOK = (
        userInput != '' &&
        parseInt(userInput) >= min && parseInt(userInput) <= max
    );

    const historyJSXList: JSX.Element[] = [];
    histories.forEach((record, i) => {
        historyJSXList.push(
            <_History key={i}>
                Try: [<_Text color="#a60000">{i + 1}</_Text>]
                Input: [<_Text color="#a60000">{record.input}</_Text>]
                Judge: [<_Text color="#a60000">{record.len}</_Text>]
            </_History>
        );
    });

    return (
        <_Wrap>
            <_Record padding="0 0 0 10px" textAlign="left">
                <_Text fontSize="18px" fontWeight="600" color="#8f8e8e">Information</_Text>
            </_Record>
            <_Record padding="1px 10px 10px 5px">
                <_Info>{message}</_Info>
            </_Record>
            <_Record backgroundColor='#e2e2e2' padding="10px">
                <_Form
                    type="number"
                    value={userInput}
                    onChange={(e) => {
                        setUserInput(e.target.value);
                    }}
                    min={min}
                    max={max}
                    isError={isInputOK}
                />
            </_Record>
            <_Record backgroundColor='#e2e2e2' padding="10px">
                <Button
                    labelName="Enter"
                    backgroundColor="#b4b4b492"
                    width={150}
                    height={40}
                    fontColor="#8a8a8a"
                    fontSize={28}
                    margin={[0, 0, 0, 0]}
                    adjsustHead={-1}
                    isEnable={!isInputOK}
                    callback={() => {
                        const value = parseInt(userInput);
                        if (value === correct) {
                            props.transitionResult({ correct, try: tryCnt });
                        } else {
                            if (value < correct) {
                                setMin(value + 1);
                            } else if (value > correct) {
                                setMax(value - 1);
                            }
                            addHistories({ len: (value < correct ? 'under' : 'over'), input: value });
                            setTryCnt(tryCnt + 1);
                            setUserInput('');
                        }
                    }}
                />
            </_Record>
            <_Record backgroundColor='#e2e2e2'>
                {historyJSXList}
            </_Record>
        </_Wrap>
    );
}

export default Play;

const _Wrap = styled.div`
    display: inline-block;
    /* background-color: #a8a8a8; */
    width: 100%;
    height: 100%;
    text-align: center;
`;

const _Info = styled.div`
    width: calc(100% - 10px);
    margin-left: 5px;
    height: 90px;
    border: solid 1px #acacac;
    background-color: #dce6eb;
    font-size: 18px;
    font-weight: 600;
    color: #6d6d6d;
    text-align: left;
    box-sizing: border-box;
    padding: 3px;
    overflow: auto;
    /* & span {
                    color: #db0000;
    } */
                `;

const _Form = styled.input`
    font-size: 22px;
    width: 100px;
    height: 30px;
    ${(props: { isError: boolean }) => props.isError ?
        '' :
        css`
            background-color: #fff6a7;
            color: red;
        `
    }
`;

const _History = styled.div`
    font-size: 16px;
    font-weight: 600;
    width: 100%;
    border-radius: 3px;
    border: solid 1px #d3d3d3;
    height: 26px;
    margin-top: 3px;
    padding-left: 10px;
    background-color: #f0f1f0;
    box-sizing: border-box;
    color: black;
    text-align: left;
    /* & span {
                    color: #db0000;
    } */
`;