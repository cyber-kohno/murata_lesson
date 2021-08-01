import styled from "styled-components";


export const _Record = styled.div<{
    backgroundColor?: string,
    textAlign?: string,
    padding?: string,
    margin?: string,
}>`
    display: inline-block;
    background-color: ${(props) => props.backgroundColor};
    width: 100%;
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
    text-align: ${(props) => props.textAlign};
    box-sizing: border-box;
`;
_Record.defaultProps = {
    backgroundColor: 'inherit',
    textAlign: 'inherit',
    padding: '0',
    margin: '0'
}

export const _Hide = styled.div`
    opacity: ${(props: { opacity: number }) => props.opacity}
`;

export const _Text = styled.span<{
    fontSize?: string,
    color?: string,
    fontWeight?: string
}>`
    font-size: ${(props)=> props.fontSize};
    color: ${(props)=> props.color};
    font-weight: ${(props)=> props.fontWeight};
`;
_Text.defaultProps = {
    fontSize: 'inherit',
    color: 'inherit',
    fontWeight: 'inherit'
}