import { useState } from "react";
import { VFC } from "react";
import styled from "styled-components";
import Play from "./mode/Play";
import Result from "./mode/Result";
import Top from "./mode/Top";

export enum PlayStatus {
    TOP,
    PLAY,
    RESULT
}

export type ResultBean = {
    try: number;
    correct: number;
}

const Sample2: VFC = () => {

    const [status, setStatus] = useState<PlayStatus>(PlayStatus.TOP);
    const [range, setRange] = useState<number>(0);
    const [resultBean, setResultBean] = useState<ResultBean>({} as ResultBean);

    const getContentsJSX = (): JSX.Element => {
        switch (status) {
            case PlayStatus.TOP: return <Top
                transitionPlay={(value: number) => {
                    setStatus(PlayStatus.PLAY);
                    setRange(value);
                }}
            />;
            case PlayStatus.PLAY: return <Play
                transitionResult={(_resultBean) => {
                    setStatus(PlayStatus.RESULT);
                    setResultBean(_resultBean);
                }}
                range={range}
            />;
            case PlayStatus.RESULT: return <Result
                transitionTop={() => {
                    setStatus(PlayStatus.TOP);
                }}
                resultBean={resultBean}
            />
            default: return <></>;
        }
    };

    return (<>
        <_Background>
            <_MainPanel>
                <_Record>
                    <_Status isActive={status == PlayStatus.TOP}>
                        <span>TOP</span>
                    </_Status>
                    <_Status isActive={status == PlayStatus.PLAY}>
                        <span>PALY</span>
                    </_Status>
                    <_Status isActive={status == PlayStatus.RESULT}>
                        <span>RESULT</span>
                    </_Status>
                </_Record>
                <_ContentsPanel>
                    {getContentsJSX()}
                </_ContentsPanel>
            </_MainPanel>
        </_Background>
    </>);
}

export default Sample2;


const _Background = styled.div`
    display: inline-block;
    background-color: #bebebe;
    width: 100%;
    height: 100%;
    text-align: center;
`;

const _MainPanel = styled.div`
    display: inline-block;
    background-color: #e0dcdc;
    /* border: solid 1px #9090902b; */
    width: 400px;
    height: calc(100% - 20px);
    margin: 10px 0 0 10px;
    border-radius: 5px;
    text-align: left;
`;

const _Record = styled.div`
    display: inline-block;
    background-color: #e4e4e4;
    width: 100%;
    height: 30px;
    margin: 5px 0 0 0;
    text-align: center;
`;

const _Status = styled.div<{ isActive: boolean }>`
    display: inline-block;
    background-color: ${(props) => props.isActive ? '#c50000' : '#e7e7e7'};
    width: 100px;
    height: 26px;
    text-align: center;
    margin: 2px 0 0 5px;
    transition: background-color 500ms;
    & span {
        display: inline-block;
        font-size: 18px;
        font-weight: 600;
        color: #ffffff;
        margin-top: 1px;
        pointer-events: none;
    }
`;
_Status.defaultProps = {
    isActive: false
}

const _ContentsPanel = styled.div`
    display: inline-block;
    background-color: #cfcfcf;
    width: calc(100% - 6px);
    height: calc(100% - 45px);
    margin: 5px 0 0 3px;
    border-radius: 2px;
`;