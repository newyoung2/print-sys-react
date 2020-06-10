import React,{ useState, useEffect } from 'react'
import { Carousel } from 'antd';
import './style.scss'

export default function SpaceIntro() {
    const [banners, setBanners] = useState([1,2,3])
    return (
        <div className="spaceIntro">
            <div className="row1">
                <Carousel autoplay>
                    {
                         banners.map((val,index)=>{
                             return  (<img key={index}  src={require("../../assets/banner.png")}></img>)
                         })
                    }
                </Carousel>
            </div>

            <div className="row2">
                <span>空间介绍</span>
                <img src={require('../../assets/row2pic.png')} alt=""/>
            </div>
        </div>
    )
}
