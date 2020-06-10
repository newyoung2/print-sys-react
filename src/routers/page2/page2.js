import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style.css'
@connect(
 state=>({count:state}),
 dispatch=>({
 add:(param)=>dispatch({type:'add',param}),
 reduce:()=>dispatch({type:'reduce'})
 })
 
)
class option extends Component {
     state={
         collapse:false
     }
    componentDidMount(){
        
        React.$axios({
            method: "post",
            url: React.$url.sys.login,
            params: {
              loginName: 'ly',
              pwd: '123456'
            }
          })
          .then(function(response) {
            console.log(response); 
            console.log(React.$utils.getTime())          
          })
          .catch(function(error) {
            console.log(error);
          });


    }

    collapse(){
 
      this.setState({
        collapse:!this.state.collapse
      })  
    }
    render() {
        return (
            <div>
                姓名：{this.props.count.name}
                年龄：{this.props.count.age}
                <button onClick={()=>this.props.add(5)}>加⼀</button>
                <button onClick={()=>this.props.reduce()}>减⼀</button>
                <button onClick={()=>this.collapse()}>{this.state.collapse?'折叠':'展开'}</button>
                {/* 折叠展开 */}
                <div className={`collStyle1 ${this.state.collapse? "collStyle2" : ""}`}></div>
                {/* 中间向两边展开 */}
                <div className={`collStyle3 ${this.state.collapse? "collStyle4" : ""}`}></div>
                {/* 淡入淡出 */}
                <div className={`collStyle5 ${this.state.collapse? "collStyle6" : ""}`}></div>

            </div>
        )
    }
}

export default option




