export const CurrentTime = () => {
    let today = new Date();   
        let year = today.getFullYear(); // 년도
        let month = (((today.getMonth()+1) < 10) ? "0" : "") + (today.getMonth() + 1);  // 월
        let date = ((today.getDate() < 10) ? "0" : "") + today.getDate();  // 날짜
        let hours = ((today.getHours() < 10) ? "0" : "") + today.getHours(); // 시
        let minutes = ((today.getMinutes() < 10) ? "0" : "") + today.getMinutes();  // 분
        let seconds = ((today.getSeconds() < 10) ? "0" : "") + today.getSeconds();  // 초
        return `${year} /${month} /${date}  ${hours} : ${minutes} : ${seconds}`; 
}
