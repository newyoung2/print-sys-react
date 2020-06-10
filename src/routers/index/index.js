import React from 'react'
import { Layout } from 'antd';
import HeaderBar  from '../../components/HeaderBar/HeaderBar'
import SideNav  from '../../components/siderNav/siderNav'
import ContentMain from '../../components/ContentMain/ContentMain'
import './index.css'
const { Header, Sider, Content } = Layout;

export default  class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  callback = (msg)=>{
    this.setState({collapsed:msg});
  }
  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <SideNav  collapsed = {this.collapsed} ></SideNav>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
              <HeaderBar  callback={this.callback} collapsed = {this.collapsed} />
          </Header>
          <Content
            className="site-layout-background"
            style={{margin: '24px 16px',padding: 24,minHeight: 280,}}>
            <ContentMain/>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

