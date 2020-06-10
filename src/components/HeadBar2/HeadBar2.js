import React,{ useState, useEffect } from 'react'
import {Popover,Menu } from 'antd';
import {withRouter} from 'react-router-dom'  
import './style.scss'

const HeadBar2 = (props)=> {
    const [nowIndex, setNowIndex] = useState(0)
    const onSelect = (e)=>{
       console.log(e)
       setNowIndex(e.key)
       const routers = ['/SpaceIntro','/option1','/firstPage','/option2','/page1','/page2']
       props.history.push(routers[e.key])
    }
    
    // 退出登录
    const loginOut =()=>{
        sessionStorage.setItem('islogin',false)
        props.history.push("/login")
    }

    const content = (
        <div>
          <p className="loginOut">个人中心</p>
          <p className="loginOut" onClick={loginOut}>退出登录</p>
        </div>
      );
    return (
        <div className="head_container">
            <img src={require('../../assets/logo.png')} alt="" />
            <div>
                <Menu  
                   onSelect={onSelect} 
                   mode="horizontal"  
                   className="menu_style"
                   defaultSelectedKeys={['0']}>
                    <Menu.Item key="0" className={nowIndex == 0?"selected_style":''}>
                        空间介绍
                    </Menu.Item>

                    <Menu.Item key="1"  className={nowIndex == 1?"selected_style":''}>
                        企业服务
                    </Menu.Item>

                    <Menu.Item key="2"  className={nowIndex == 2?"selected_style":''}>
                        创业培训
                    </Menu.Item>

                    <Menu.Item key="3"  className={nowIndex == 3?"selected_style":''}>
                        企业入驻
                    </Menu.Item>

                    <Menu.Item key="4"  className={nowIndex == 4?"selected_style":''}>
                        新闻公告
                    </Menu.Item>

                    <Menu.Item key="5"  className={nowIndex == 5?"selected_style":''}>
                        联系我们
                    </Menu.Item>

                </Menu>
            </div>
            
            <Popover placement="bottom" content={content} >
                <div className="lg_right">
                    <img src={require('../../assets/loginbg.png')} alt="" />
                </div>
            </Popover>
        </div>
    )
}

export default withRouter(HeadBar2)