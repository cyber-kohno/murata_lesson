import { useState, VFC } from "react";
import styled from "styled-components";
import Button from "../component/Button";
import { _Record, _Text } from "../component/Style";
import { PlayStatus, ResultBean } from "../Sample2";


const Result = (props: { transitionTop: () => void, resultBean: ResultBean }) => {

    return (
        <_Wrap>
            <_Record
                // backgroundColor="#00000011"
                textAlign="left"
                padding="10px 0 0 10px"
            >
                <_Text fontSize="26px" color="#464646" fontWeight="600">
                    <_Text color="#008026">
                        Matched your number!<br /><br />
                    </_Text>
                    Try: [<_Text color="#a60000">
                        {props.resultBean.try}
                    </_Text>]<br />
                    Correct: [<_Text color="#a60000">
                        {props.resultBean.correct}
                    </_Text>]<br /><br />
                </_Text>
            </_Record>
            <_Record>
                <Button
                    labelName="Return"
                    backgroundColor="#b4b4b492"
                    width={200}
                    height={50}
                    fontColor="#8a8a8a"
                    fontSize={36}
                    margin={[0, 0, 0, 0]}
                    adjsustHead={-1}
                    callback={() => {
                        props.transitionTop();
                    }}
                />
            </_Record>
        </_Wrap>
    );
}

export default Result;

const _Wrap = styled.div`
    display: inline-block;
    /* background-color: #a8a8a8; */
    width: 100%;
    height: 100%;
    text-align: center;
`;