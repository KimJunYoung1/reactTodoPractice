import styled from 'styled-components';

export const BaseInput = styled.input`
    width: 300px;
    height: 22px;
    padding: 0px;
    margin: 0px;
    border: none;
    font-size: 14px;
    font-family: "Noto Sans KR", "Roboto", "APPLE SD Gothic NEO", sans-serif, helvetica;
`;

export const InputRapper = styled.div`
    width:300px;
    padding: 12px 16px 12px 12px;
    border: 1px solid #d7dbe6;
    margin: 5px 0px ;
`;

export const TodoInput = styled.input`
    position: absolute;
    top: 200px;
    width: 500px;
    height: 30px;    
    border: 1px solid #1A7CFF;
    font-size: 18px;
    font-family: "Noto Sans KR", "Roboto", "APPLE SD Gothic NEO", sans-serif, helvetica;
`;