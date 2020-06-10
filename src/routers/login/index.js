import React, { Component } from 'react'
import { Input, Button,message } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
import bg from './background'
// import './p5.min'
// import './script'
import './style.css'

export default class index extends Component {
    state = {
        states: 'login',
        username:'',
        password:''
    }
    componentDidMount() {
        bg()
        console.log(this.props)
    }
    login(){
        let that = this
        sessionStorage.setItem("islogin",true)
        that.props.history.push('/')
        // React.$axios({
        //     method: "post",
        //     url: React.$url.sys.login,
        //     params: {
        //       loginName: this.state.username,
        //       pwd: this.state.password
        //     }
        //   })
        //   .then(function(response) {
        //      console.log(response);
           
        //     if(response.data.code != 10000){
                
        //         //
        //     }else{
        //         message.error('用户名或密码错误！',1);
        //     }


            
        //   })
        //   .catch(function(error) {
        //      console.log(error);
        //   });
        
    }

    gologin = () => {
        this.setState({
            states: 'resgin'
        })
    }

    goresgin = () => {
        this.setState({
            states: 'login'
        })
    }

    usernameChange(e){
        this.setState({
            username:e.target.value
        },()=>{
            console.log(this.state.username)
        })
    }

    passwordChange(e){
        this.setState({
            password:e.target.value
        },()=>{
            console.log(this.state.password)
        })
    }
    render() {
        return (
            <div className="container_login" id="login">
                {/* <img className='bgpic' src='http://attach.bbs.miui.com/forum/201304/25/195151szk8umd8or8fmfa5.jpg' ></img> */}
                {/* <video id="v1" autoplay loop muted>
                    <source src={vdo} type="video/mp4"  />
                </video> */}
                <canvas id="canvasbg" style={{'position':"absolute",'zIndex':"-1",width:"100%",height:'100vh'}}></canvas>
                <div className={`form_login ${this.state.states == 'login' ? "showbox" : "hidebox"}`}   >
                    <div className='form_login_child'>
                        <Input placeholder="用户名"  onChange={(e)=>this.usernameChange(e)}   prefix={<UserOutlined/>} />
                    </div>
                    <div className='form_login_child'>
                        <Input.Password placeholder="密码"   onChange={(e)=>this.passwordChange(e)}   prefix={<UnlockOutlined/>} />
                    </div>
                    <div className='form_login_child'>
                        <Button type="primary" shape="round"  onClick={()=>this.login()}  block>登录</Button>
                        {/* <div class="btnStyle1" onClick={this.gologin} >登录</div> */}
                    </div>
                    <div className='form_login_child' style={{marginTop:'0',color:"#007AFF"}} >
                        <span style={{float:'right',color:"#007AFF",cursor: 'pointer'}} onClick={this.gologin}>注册</span>
                    </div>
                </div>

                <div className={`form_login form_resgin ${this.state.states == 'resgin' ? "showbox" : "hidebox"}`}>
                    <div className='form_login_child'>
                        <Input placeholder="用户名" prefix={<UserOutlined />} />
                    </div>
                    <div className='form_login_child'>
                        <Input.Password placeholder="密码" prefix={<UnlockOutlined />} />
                    </div>
                    <div className='form_login_child '>
                        <Button type="primary" shape="round"  block>注册</Button>
                        {/* <div class="btnStyle1" onClick={this.goresgin} >注册</div> */}
                    </div>
                    <div className='form_login_child' style={{marginTop:'0',color:"#007AFF"}} >
                        <span style={{float:'right',color:"#007AFF",cursor: 'pointer'}} onClick={this.goresgin}>登录</span>
                    </div>
                </div>
            </div>
        )
    }
}
