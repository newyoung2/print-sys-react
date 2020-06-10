import React from 'react'
import { Layout } from 'antd';
import HeaderBar  from '../../components/HeaderBar/HeaderBar'
import SideNav  from '../../components/siderNav/siderNav'
import ContentMain from '../../components/ContentMain/ContentMain'
import HeaderBar2 from '../../components/HeadBar2/HeadBar2'
import Bottom from '../../components/Bottom/Bottom'
import './index.css'
const { Header, Footer, Content } = Layout;

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
        <Header  style={{'background':'white'}}>
           <HeaderBar2></HeaderBar2>
        </Header>
        <div  style={{'width':'100%'}}>
          <ContentMain/>
        </div>
        <Footer style={{'padding':'0'}}>
            <Bottom/>
        </Footer>
        {/* <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
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
        </Layout>*/}
      </Layout>
    );
  }
}

