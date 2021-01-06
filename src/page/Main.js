import React, { useState } from 'react';
import { LogoutButton, TodoAddButton, TodoMinusButton } from '../component/BaseButton';
import { TodoInput } from '../component/BaseInput';
import { LoginCheck, TodoListCheck } from '../component/BaseHtag';
import styled from 'styled-components';

export const Main = (props) => {
    const [ TodoList, SetTodoList ] = useState([
        {id :1, contents: '운동하기', completed: false},
        {id :2, contents: '소프트웨어 공부하기', completed: false},
    ]);
    const [ TodoContents, SetTodoContents ] = useState('');

    const TodoListAdd = (e) => {
        const addTodo = [ ...TodoList, {id: TodoList[TodoList.length - 1].id + 1, contents: TodoContents, time: HandleDateAndTime(), completed: false}];
        // 데이터 추가해주는 부분, length + 1 부분 수정하기 삭제하고 다시 만들때 id값이 고유값이 안됨
    
        SetTodoList(addTodo);        
    }

    const TodoEvent = (e) => {            
        SetTodoContents(e.target.value);
    } 
    
    const HandleEnterAddTodo = (e) => {
        if(e.key === 'Enter'){
            TodoListAdd();
        }
    }
    
    const TodoListMinus = (index) => {
        const deleteTodo = TodoList.filter(el => el.id !== index);
        console.log('보자', deleteTodo)
        SetTodoList(deleteTodo);
    }

    const HandleDateAndTime = () => {
        let today = new Date();   
        let year = today.getFullYear(); // 년도
        let month = today.getMonth() + 1;  // 월
        let date = today.getDate();  // 날짜
        let hours = today.getHours(); // 시
        let minutes = today.getMinutes();  // 분
        let seconds = today.getSeconds();  // 초
        return `${year}/${month}/${date} ${hours} : ${minutes} : ${seconds}`; 
    }

    return (
        <>
            <LoginCheck>
                {props.name}님 환영합니다.
            </LoginCheck>
            <LogoutButton onClick={props.handleClick}>로그아웃</LogoutButton>
            <TodoListCheck>
                {props.name}님의 투두리스트                
            </TodoListCheck>          
            <TodoInput placeholder='What do you want to do today?' onChange={TodoEvent} onKeyPress={HandleEnterAddTodo} />
            <TodoAddButton onClick={TodoListAdd}>
                추가
            </TodoAddButton>
            <TodoCount> 해야할일 {TodoList.length}개</TodoCount>                
            {TodoList.map(todo => {
                return  <ul key={todo.id}>
                            <li>
                                {todo.contents} {todo.time} <TodoMinusButton onClick={() => TodoListMinus(todo.id)}> - </TodoMinusButton>
                            </li>
                        </ul>
            })}  
        </>
    )
}

const TodoCount = styled.div`
    margin: 30px;
    font-size: 30px;
`