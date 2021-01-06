const db = [
    {userId: 'soxo1027@gmail.com', userPassword: '1017', name:'김준영'},
    {userId: 'hyunseo0419@gmail.com', userPassword: '0419', name:'이현서'},
    {userId: 'mocha_0614@gmail.com', userPassword: '0630', name:'서보미'}
];

export const responseToSignInRequest = (object) => {
  
    const isUserId = db.filter((user) => {
        console.log('object--->',user.userId === object.userId)
        return object.userId === user.userId
    }).length > 0
    
    const isUserPassword = db.filter((user) => {
        return object.userPassword === user.userPassword
    }).length > 0 

    console.log(isUserId, isUserPassword)
    if(!isUserId){
        return alert('등록되지 않은 계정입니다.')
    }
    else if(!isUserPassword){
        return alert('비밀번호가 틀렸습니다.')
    }

    const response = db.filter((user)=>{
        return object.userId === user.userId && object.userPassword === user.userPassword
    })

    console.log(response);
    return response
}