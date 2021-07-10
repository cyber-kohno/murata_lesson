import { VFC } from "react";
import styled from "styled-components";
import './style.css'

const ButtonTest = styled.div`
    display: inline-block;
    background-color: #be0f0f6e;
    width: 80px;
    height: 50px;
`;

const Sample2: VFC = () => {

    return (<>
        <div className="hello">
            <p>Hello react!</p>
            <ButtonTest></ButtonTest>
        </div>
    </>);
}

export default Sample2;