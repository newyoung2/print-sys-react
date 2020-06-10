import React from 'react'
import './bottom.scss'
export default function Bottom() {
    return (
        <div className="bottom_container">
            <div className="row1">
                <div>品牌介绍</div>
                <div>团队介绍</div>
                <div>产品介绍</div>
                <div>新闻动态</div>
                <div>关于我们</div>
                <div>服务品牌</div>
            </div>
            <div className="row2">
                <div className="row2_left">
                    <span>联系我们</span>
                    <span>道之韵科技有限公司</span>
                    <span>电话：0851-88888881</span>
                    <span>邮箱：88888@qq.com</span>
                    <span>地址：贵州省贵阳市南明区贵惠路249号天豪精品酒店14楼</span>
                    <div class="b_icon">
                        <div class="b_icon_box">
                            <img src={require("../../assets/b_icon1.png")} alt=""/>
                        </div>
                        <div class="b_icon_box">
                            <img src={require("../../assets/b_icon3.png")} alt=""/>
                        </div>
                        <div class="b_icon_box">
                            <img src={require("../../assets/b_icon2.png")} alt=""/>
                        </div>
                        <div class="b_icon_box">
                            <img src={require("../../assets/b_icon4.png")} alt=""/>
                        </div>
                    </div>
                    <span>友情链接：百度   |   新浪   |   网易</span>
                </div>
                <div className="row2_right">
                    <div className="row2_right_box">关注公众号</div>
                    <img src={require('../../assets/ewm.jpg')} alt=""/>    
                </div>
                <div className="row2_right">
                    <div className="row2_right_box">关注小程序</div>
                    <img src={require('../../assets/ewm.jpg')} alt=""/>    
                </div>
            </div>
            <div className="row3">
                <span >包道之韵众创空间 :京ICP备123456789号</span>
                <span  style={{'margin':"0 30px"}}> |</span>
                <span>公安备号:123456123</span>
            </div>
        </div>
    )
}
