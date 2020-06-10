import React, { Component } from 'react'
import './style.css'

const pic1 = require('../../assets/fp1.png')

export default class firstPage extends Component {
    render() {
        return (
            <div className="fp_container">
                {/* 头部 */}
                <div className="fp_header">
                    <div className="fp_headerItem clr1">
                        <img className="fp_headerItem_pic" src={pic1}></img>
                        <div className="fp_headerItem_text" style={{"flexDirection":'column'}}>
                            <p className="fp_headerItem_textp">待审核发印单</p>
                            <p className="fp_headerItem_textp">5</p>
                        </div>
                    </div>
                    <div className="fp_headerItem clr2">
                    <img className="fp_headerItem_pic" src={pic1}></img>
                        <div className="fp_headerItem_text" style={{"flexDirection":'column'}}>
                            <p className="fp_headerItem_textp">发印单总量</p>
                            <p className="fp_headerItem_textp">15</p>
                        </div>
                    </div>
                    <div className="fp_headerItem clr3">
                    <img className="fp_headerItem_pic" src={pic1}></img>
                        <div className="fp_headerItem_text" style={{"flexDirection":'column'}}>
                            <p className="fp_headerItem_textp">发印单草稿</p>
                            <p className="fp_headerItem_textp">25</p>
                        </div>
                    </div>
                    <div className="fp_headerItem clr4">
                    <img className="fp_headerItem_pic" src={pic1}></img>
                        <div className="fp_headerItem_text" style={{"flexDirection":'column'}}>
                            <p className="fp_headerItem_textp">打印记录</p>
                            <p className="fp_headerItem_textp">58</p>
                        </div>
                    </div>
                </div>
                
                {/* 中部 */}
                <div className="mid_content">
                    <div className="mid_left">
                        <p className="title1_style">发印单统计</p>
                        <p className="title2_style">今日已处理发印单</p>
                        <div class="mid_leftItem">
                            <div className="fp_headerItem mid_leftItem_style">
                                <img className="fp_headerItem_pic" src={pic1}></img>
                                <div className="fp_headerItem_text" style={{ "flexDirection": 'column' }}>
                                    <p className="fp_headerItem_textp">新增发印单</p>
                                    <p className="fp_headerItem_textp">5</p>
                                </div>
                            </div>
                            <div className="fp_headerItem mid_leftItem_style">
                                <img className="fp_headerItem_pic" src={pic1}></img>
                                <div className="fp_headerItem_text" style={{ "flexDirection": 'column' }}>
                                    <p className="fp_headerItem_textp">已审核发印单</p>
                                    <p className="fp_headerItem_textp">5</p>
                                </div>
                            </div>
                            <div className="fp_headerItem mid_leftItem_style">
                                <img className="fp_headerItem_pic" src={pic1}></img>
                                <div className="fp_headerItem_text" style={{ "flexDirection": 'column' }}>
                                    <p className="fp_headerItem_textp">已打印发印单</p>
                                    <p className="fp_headerItem_textp">5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mid_right">
                    
                    </div>
                </div>

            </div>
        )
    }
}
