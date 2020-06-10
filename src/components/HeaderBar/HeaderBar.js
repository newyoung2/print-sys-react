import React,{useState} from 'react'
import { Popover } from 'antd';
import {MenuUnfoldOutlined,MenuFoldOutlined,} from '@ant-design/icons';
import {withRouter} from 'react-router-dom'  
import './style.css'


const HeadFun =  (props)=> {
    
     const [count,setState]=useState(true)

     const toggle = () => {
        setState(!count)
        props.callback(count)
      };

    const loginOut = ()=>{
        console.log(props)
        sessionStorage.setItem('islogin',false)
        props.history.push("/login")
    }
      
      const content = (
        <div>
          <p>个人信息</p>
          <p className="loginOut" onClick={loginOut}>退出登录</p>
        </div>
      );
     
    return (
        <div className="header_container">
            {React.createElement(count ? MenuFoldOutlined : MenuUnfoldOutlined , {
              className: 'trigger',
              onClick: ()=>toggle(),
            })}
            
        <Popover placement="bottomRight" content={content} >
           <div className="header_tx"></div>
        </Popover>
           

        </div>
    )
}

export default withRouter(HeadFun)