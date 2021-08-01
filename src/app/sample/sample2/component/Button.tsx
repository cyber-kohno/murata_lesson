import { useMemo } from "react";
import { VFC } from "react";
import styled, { css } from "styled-components";

export type ButtonProps = {
    labelName: string;
    backgroundColor: string;
    width: null | number;
    height: number;
    margin: number[];
    fontColor: string;
    fontSize: number;
    adjsustHead: number;
    isEnable: boolean;
    callback: Function;
}

const Button = (props: ButtonProps) => {

    const _Style = styled.div`
        display: inline-block;
        background-color: ${props.backgroundColor};
        /* ${props.width != null ? props.width + 'px;' : ''} */
        width: 200px;
        height: ${props.height}px;
        text-align: center;
        margin: ${props.margin.join('px ')};
        border-radius: 4px;
        border: solid 1px #0000002b;
        ${props.isEnable ? css`
            pointer-events: none;
            opacity: 0.4;
        ` : ''}
        & span {
            display: inline-block;
            font-size: ${props.fontSize}px;
            font-weight: 600;
            color: ${props.fontColor};
            margin-top: ${props.adjsustHead}px;
            pointer-events: none;
        }
        &:hover {
            opacity: 0.7;
            /* background-color: yellow; */
        }
    `;

    return (
        <_Style
            onClick={()=>{
                props.callback();
            }}>
            <span>{props.labelName}</span>
        </_Style>
    );
}

Button.defaultProps = {
    isEnable: false,
  };

export default Button;