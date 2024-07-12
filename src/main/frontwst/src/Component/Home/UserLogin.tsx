import React,{useState} from "react";

export default function UserLogin(){
    
    const [loginFormData, setFormData] = useState({
        userId: '',
        userName: '',
        password: '',
        email: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...loginFormData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();     // 여기에서 formData를 사용하여 로그인 요청을 서버에 보냅니다.
        console.log(loginFormData);

        const sendData = {
            userId: loginFormData.userId,
            userName: loginFormData.userName,
            password: loginFormData.password,
            email: loginFormData.email,
      };


     // POST 요청을 보낼 URL 설정
     const url = 'http://localhost:8080/user/login'; // 적절한 백엔드 URL로 변경해야 합니다.

     // fetch를 사용하여 POST 요청 보내기
     fetch(url, {
       method: 'POST',
       headers: {
        "Content-Type": "application/json",
        "credentials": "include",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "true"
      },
       body: JSON.stringify(sendData), // 데이터를 JSON 문자열로 변환하여 전송, 전송될 때 자바스크립트 형식
     })
       .then((response) => {
         if (!response.ok) {
           throw new Error('Network response was not ok');
         }
         return response.json(); // 응답을 JSON 형식으로 파싱
       })
       .then((data) => {
         console.log('Success:', data);
         // 성공적으로 처리된 경우 여기에서 추가적인 로직을 수행할 수 있습니다.
       })
       .catch((error) => {
         console.error('Error:', error);
         // 에러 처리 로직을 추가할 수 있습니다.
       });
   };
    
    return(
        
        <div>
        <h2>로그인 페이지</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>아이디:</label>
            <input className="bg-teal-400 my-3"
              type="text"
              name="userId"
              value={loginFormData.userId}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>이름:</label>
            <input className="bg-teal-400 my-3"
              type="text"
              name="userName"
              value={loginFormData.userName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>비밀번호:</label>
            <input className="bg-teal-400 my-3"
              type="password"
              name="password"
              value={loginFormData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>이메일:</label>
            <input className="bg-teal-400 my-3"
              type="email"
              name="email"
              value={loginFormData.email}
              onChange={handleChange}
              required
            />
          </div>
          <button className="bg-teal-500" type="submit">가입하기</button>
        </form>
      </div>

    )
}