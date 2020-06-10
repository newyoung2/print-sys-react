/**
 * @author: liuyang
 * @create: 2019/12/20
 * @describe: 通用工具
 */
import axios from 'axios';
import { message } from 'antd';

// import { Message } from 'element-ui';
/* ===========ajax请求=========== */
//添加一个请求拦截器
axios.interceptors.request.use((config) => {
  //在请求发出之前进行一些操作
  if (config.url.indexOf('&_=') < 0 && config.url.indexOf('?_=') < 0) {
    if (config.url.indexOf('?') > -1) {
      config.url += '&_=' + new Date().getTime();
    } else {
      config.url += '?_=' + new Date().getTime();
    }
  }
  // if (config.method === 'post' && config.data && config.data._type === 'formdata') {
  //   delete config.data._type;
  //   config = {
  //     ...config,
  //     headers: {
  //       ...config.headers,
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     },
  //     transformRequest: function (data) {
  //       let ret = ''
  //       for (let it in data) {
  //         ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  //       }
  //       return ret
  //     }
  //   };
  // }
  //config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  // config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
  // if(config.method === 'post') {
  //     config.data = qs.stringify( {
  //         ...config.data
  //     })
  // } 
  // if (sessionStorage.getItem('Authorization')) {
  //   // console.log(sessionStorage.getItem('Authorization'))
  //   config.headers['Token'] = sessionStorage.getItem('Authorization');
  // } else {
  //   delete config.headers['Token'];
  // }
  return config;
}, (err) => {
  //Do something with request error
  return Promise.reject(err);
});
//添加一个响应拦截器
axios.interceptors.response.use((res) => {
  //在这里对返回的数据进行处理
//   if (res.data.MSG.toUpperCase() != 'OK') { 
//     message.error(res.data.MSG)
//      // window.location.hash = '/login';
//  }
 return res;
}, (err) => {
  //Do something with response error
  //网络错误也在这里处理
  // message.error('网络错误')
  console.log(err)
  return Promise.reject(err);
});
/* ===========ajax请求end=========== */


class Utils {

  getToken(){
    let res = false
    res = sessionStorage.getItem("islogin")
    console.log(res)
    return res
  }
  /*
   * params: 字段名
   * return: 字段值
   * function: 获取地址栏查询字段
   * */
  getQueryData(name) {
    var url = window.location.hash; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") > -1) {
      var str = url.substr(url.indexOf("?") + 1);
      var strs = str.split("&");
      for (var i = 0; i < strs.length; i++) {
        theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
      }
    }
    return theRequest[name];
  }
 
  getTime() {
    let d = new Date();
    let yy = d.getFullYear(); //获取年 
    let month = d.getMonth()+1;//获取月  
    let dd = d.getDate(); //获取当日
    let hh = d.getHours()//获取小时
    let mm = d.getMinutes()//获取分钟
    let ss = d.getSeconds()//获取秒
    return yy+"-"+month+"-"+dd+" "+hh+":"+mm+":"+ss
  }

  getDate() {
    let d = new Date();
    let yy = d.getFullYear(); //获取年 
    let month = d.getMonth()+1;//获取月  
    let dd = d.getDate(); //获取当日
    if(month<10){
      month = '0'+month
    }
    if(dd<10){
      dd = '0'+dd
    }
    return `${yy}${month}${dd}`
  }
   
  getDate1() {
    let d = new Date();
    let yy = d.getFullYear(); //获取年 
    let month = d.getMonth()+1;//获取月  
    let dd = d.getDate(); //获取当日
    if(month<10){
      month = '0'+month
    }
    if(dd<10){
      dd = '0'+dd
    }
    return `${yy}-${month}-${dd}`
  }

  //时间格式转化
   timeFormat(time) {
    var d = new Date(time);
 
    var year = d.getFullYear();       //年  
    var month = d.getMonth() + 1;     //月  
    var day = d.getDate();            //日  
 
    var hh = d.getHours();            //时  
    var mm = d.getMinutes();          //分  
    var ss = d.getSeconds();           //秒  
 
    var clock = year + "/";
 
    if (month < 10)
        clock += "0";
 
    clock += month + "/";
 
    if (day < 10)
        clock += "0";
 
    clock += day + " ";
 
    if (hh < 10)
        clock += "0";
 
    clock += hh + ":";
    if (mm < 10) clock += '0';
    clock += mm + ":";
 
    if (ss < 10) clock += '0';
    clock += ss;
    return (clock);
}

  goTop() {
    let content = document.querySelector('.content');
    var scrollToTop = window.setInterval(function () {
      var pos = content.scrollTop;
      if (pos > 0) {
        content.scrollTo(0, pos - 40); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }

}
let aaa = "fdsf"
export default Utils;
export {
  axios,
  aaa
};
