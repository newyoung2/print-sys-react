import React from 'react'
import CustomMenu from "../CustomMenu/index";
import './style.css'
import {
  HomeOutlined,
  SettingFilled,
  BarChartOutlined,
} from '@ant-design/icons';
const menus = [
  {
    title: '首页',
    icon: HomeOutlined,
    key: '/SpaceIntro'
  },
  {
    title: '页面1',
    icon: BarChartOutlined,
    key: '/pages',
    subs: [
      {key: '/pages/page1', title: '页面1', icon: '',},
      {key: '/pages/page2', title: 'redux练习', icon: '',},
    ]
  },
  {
    title: '设置',
    icon: SettingFilled,
    key: '/firstPage'
  },
]


class SiderNav extends React.Component {
  render() {

    return (
      <div>
        <div style={styles.logo}></div>
        <CustomMenu menus={menus}/>
      </div>
    )
  }
}

const styles = {
  logo: {
    height: '32px',
    background: 'rgba(255, 255, 255, .2)',
    margin: '16px'
  }
}

export default SiderNav
