import React from 'react'
import { Flex } from 'antd';
function Login() {
  return (
    <Flex justify='center' align='center'>
       <div className='formLogin'>
        <div className='containerForm'>
            <div className='Title'>
              <h2><span>로그인</span><span>후</span> 이용이 가능합니다.</h2>
            </div>
            <div className='formContent'>
              <form >
                <label htmlFor="id" className='label_ID'>아이디</label>
                <input  type='text' name='id' id ="id"  placeholder='아이디를 입력하세요. '/>

                <label htmlFor="password" className='label_Password'>비밀번호</label>
                <input  type='password' name='password' id ="password"  placeholder='아이디를 입력하세요. '/>

                <button type='submit' onClick={(e)=>e.preventDefault() } className='btn_Login'>로그인</button> 
                   
              </form>
            </div>
        </div>
       </div>
    </Flex>
  )
}

export default Login