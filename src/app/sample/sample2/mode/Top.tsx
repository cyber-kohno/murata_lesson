import { useState, VFC } from "react";
import styled, { css } from "styled-components";
import Button from "../component/Button";
import { _Record, _Text } from "../component/Style";
import { PlayStatus } from "../Sample2";

const Top = (props: { transitionPlay: (range: number) => void }) => {

    const [range, setRange] = useState<number>(50);

    const rangeOptionJSXList: JSX.Element[] = [];
    [50, 100, 200, 500, 1000].forEach((value, i) => {
        rangeOptionJSXList.push(
            <option key={i} value={value}>{value}</option>
        );
    });
    return (
        <_Wrap>
            <_Title><span>Kazuate React</span></_Title>
            <_Record margin="20px 0 10px 0">
                <_Text fontSize="22px" fontWeight="600" color="#440202">Range: 0～</_Text>
                <_Combobox
                    onChange={(e) => {
                        setRange(parseInt(e.target.value));
                    }}
                >
                    {rangeOptionJSXList}
                </_Combobox>
            </_Record>
            <_Record margin="0 0 10px 0">
                <Button
                    labelName="Start"
                    backgroundColor="#b4b4b492"
                    width={200}
                    height={50}
                    fontColor="#8a8a8a"
                    fontSize={36}
                    margin={[0, 0, 0, 0]}
                    adjsustHead={-1}
                    callback={() => {
                        props.transitionPlay(range);
                    }}
                />
            </_Record>
        </_Wrap>
    );
}

export default Top;

const _Wrap = styled.div`
    display: inline-block;
    /* background-color: #a8a8a8; */
    width: 100%;
    height: 100%;
    text-align: center;
`;

const _Title = styled.div`
    display: inline-block;
    /* background-color: #ffffff1f; */
    height: 30px;
    text-align: center;
    margin: 35px 0 20px 0;
    & span {
        display: inline-block;
        font-size: 35px;
        font-weight: 600;
        color: #b10000;
        margin-top: -5px;
    }
`;

const _Combobox = styled.select`
    font-size: 22px;
    width: 100px;
    height: 30px;
`;