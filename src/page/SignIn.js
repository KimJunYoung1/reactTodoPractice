import React, { useState } from 'react';
import { BaseInput, InputRapper } from '../component/BaseInput';
import { BaseButton } from '../component/BaseButton';
import { responseToSignInRequest } from '../server';
import { Main } from './Main';
import styled from 'styled-components';

export const SignIn = () => {
    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userName, setUserName] = useState(null);

    const userIdEvent = (e) => {
        setUserId(e.target.value);
    }

    const userPasswordEvent = (e) => {
        setUserPassword(e.target.value);
    }

    const checkAlert = () => {
        if(userId.length === 0 || userPassword.length === 0){
            return alert(`아이디와 비밀번호를 입력해주세요`);
        }
        let userData = {userId, userPassword}

        const response = responseToSignInRequest(userData);

        console.log('response=---->', response)

        if(response === undefined){
            return ;
        }

        if(response.length > 0){
            alert('로그인에 성공하였습니다');
            setUserName(response[0].name); 
        } 
        
    }

    const handleEnterLogin = (e) => {
        if(e.key === 'Enter'){
            checkAlert();
        }
    }

    const handleClickLogout = () => {
        alert('로그아웃 되었습니다');
        setUserName(null);
        // setUserId('');
        // setUserPassword('');
    }    

    return (
        <Container>  
            {!!userName ? (
              <Main name={userName} handleClick={handleClickLogout} ></Main>  
            ) : (
                <>
                <InputRapper>
                    <BaseInput placeholder='아이디' onChange={userIdEvent} onKeyPress={handleEnterLogin}/>
                </InputRapper>
                <InputRapper>
                    <BaseInput placeholder='비밀번호' type='password' onChange={userPasswordEvent}  onKeyPress={handleEnterLogin}/>
                </InputRapper>
                <ContainerDiv>
                    <div>
                        <LabelContainer>
                            <CheckBox type='checkbox' />
                            아이디저장
                        </LabelContainer>                       
                            <a href='www.google.com'>
                                아이디  
                            </a>
                                /
                            <a href='www.google.com'>
                                비밀번호 찾기  
                            </a>
                            <a href='www.google.com'>
                                회원가입
                            </a>                      
                    </div>
                </ContainerDiv>           
                <BaseButton onClick = {checkAlert}>
                    로그인    
                </BaseButton>    
                </>
            )}  
        </Container>
    )
}

const Container = styled.div` 
    display: flex;    
    flex-direction: column;
    align-items: center;
    height: 100vh;
    Justify-content: center;
`;

const CheckBox = styled.input`
    
`

const LabelContainer = styled.label`
    
`
const ContainerDiv = styled.div`
    overflow: hidden;
    margin: 8px 0 30px;
    font-size: 12px;
` 