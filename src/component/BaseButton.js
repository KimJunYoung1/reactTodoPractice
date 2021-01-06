import styled from 'styled-components';

export const BaseButton = styled.button`
    width: 330px;
    height: 66px;
    color: white;
    font: 18px Arial;
    background-color: #1A7CFF;
    padding: 22px 0px 20px;
    border: none;
`;

export const LogoutButton = styled.button`
    position: absolute;
    width: 200;
    height: 30px;
    float: right;
    top: 70px;
    right: 60px;
    overflow: hidden;
    color: white;
    font: 18px Arial;
    background-color: #1A7CFF;
    border: none;
`;

export const TodoAddDiv = styled.span`
    position: absolute;
    right: 35px;
    top: 172px;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    background: #22b8cf;
    border-radius: 3px;
    color: white;
    font-weight: 600;
    cursor: pointer;

 `

export const TodoMinusButton = styled.button`
    background: white;
    border: none;
    color: red;
    cursor: pointer;   
`