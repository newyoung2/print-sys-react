import React,{ useState, useEffect } from 'react'
import { Form, Input, Button, message } from 'antd';
import './login.scss'

export default function Login(props) {
  const [mode, setmode] = useState('login')
  const [form] = Form.useForm();
  const [form2] = Form.useForm();

 const goresgin = () => {
    // this.setState({
    //   mode: 'resgin'
    // })
    setmode('resgin')
    // Form.resetFields();
  }
  const gologin = () => {
    setmode('login')
    // Form.resetFields();
  }
  
  

  //登录校验成功调用函数
  const onFinish = (e) => {
    sessionStorage.setItem("islogin",true)
    props.history.push('/')
    // React.$axios({
    //   method: "post",
    //   url: React.$url.sys.login,
    //   params: {
    //     username: e.username,
    //     password: e.password,
    //     client_id: "pc",
    //     grant_type: "password",
    //     scope: "all",
    //     client_secret: "pc"
    //   }
    // })
    //   .then(function (res) {
    //     console.log(res);
    //   })

  }

   //登录校验失败调用函数
   const onFinishFailed = (e) => {
    console.log(e)
    message.warning(e.errorFields[0].errors[0])
  }
 
  //忘记密码
  const forgetPassword = ()=>{
    message.warning('请联系管理员',2)
  }
  
   //注册校验成功调用函数
  const onFinish1 = (e) => {
    React.$axios({
      method: "post",
      url: React.$url.sys.resgin,
      params: {
        username: e.username,
        password: e.password,
        phone: '13595026343'
      }
    })
      .then(function (res) {
        console.log(res);
        form2.resetFields()
        message.success('注册成功!')
      })
  }
 
   //登录校验失败调用函数
   const onFinishFailed1 = (e) => {
    console.log(e)
    message.warning(e.errorFields[0].errors[0])
  }

  //校验密码长度是否大于6位
  const valiPassword = (rule, value, callback) => {
    console.log(value)
    if (value != '' && value.length < 6) {
      return Promise.reject('密码不能少于6位');
    } else {
      return Promise.resolve();
    }
  }

  return (
    <div className="login">
    <div className="login_left"></div>
    <div className="login_right">

      {/* 登陆模块 */}
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
      >
        <div class={`${mode == 'login' ? "login_content" : "hidebox"}`}>
          <p class="lc_title">欢迎登陆</p>
          <Form.Item name="username"
            rules={[
              {
                required: true,
                message: '请填写用户名',
              },
            ]}
          >
            <div className="input_box">
              <img src={require("../../assets/lg_icon1.png")} />
              <Input placeholder="请输入账户名" />
            </div>
          </Form.Item>

          <Form.Item name="password"
            rules={[
              {
                required: true,
                message: '密码不能为空',
              },
              {
                validator: valiPassword
              }
            ]}
          >
            <div className="input_box">
              <img src={require("../../assets/lg_icon2.png")} />
              <Input.Password placeholder="请输入密码" />
            </div>
          </Form.Item>

          <Form.Item>
            <Button type="primary" className="login_btn" htmlType="submit">登录</Button>
          </Form.Item>

          <div className="lg_res_for">
            <span class="lc_fpw" onClick={goresgin} >注册账号</span>
            <span class="lc_fpw" onClick={forgetPassword} >忘记密码?</span>
          </div>
        </div>
      </Form>


      {/* 注册模块 */}
      <Form
        onFinish={onFinish1}
        onFinishFailed={onFinishFailed1}
        form={form2}
      >
        <div class={`${mode == 'resgin' ? "login_content" : "hidebox"}`}>
          <p class="lc_title">注册账号</p>
          <Form.Item name="username"
            rules={[
              {
                required: true,
                message: '请填写用户名',
              },
            ]}
          >
            <div className="input_box">
              <img src={require("../../assets/lg_icon1.png")} />
              <Input placeholder="请输入账户名" />
            </div>
          </Form.Item>

          <Form.Item name="password"
            rules={[
              {
                required: true,
                message: '密码不能为空',
              },
              {
                validator: valiPassword
              }
            ]}
          >
            <div className="input_box">
              <img src={require("../../assets/lg_icon2.png")} />
              <Input.Password placeholder="请输入密码" />
            </div>
          </Form.Item>

          <Form.Item name="password2"
            rules={[
              {
                required: true,
                message: '密码不能为空',
              },
              {
                validator: valiPassword
              }
            ]}
          >
            <div className="input_box">
              <img src={require("../../assets/lg_icon2.png")} />
              <Input.Password placeholder="请再次输入密码" />
            </div>
          </Form.Item>

          <Form.Item>
            <Button type="primary" className="login_btn" htmlType="submit">注册</Button>
          </Form.Item>
          <div className="lg_res_for">
            <span ></span>
            <span class="lc_fpw" onClick={gologin}>返回登录</span>
          </div>
        </div>
      </Form>

    </div>
  </div>
  )
}
