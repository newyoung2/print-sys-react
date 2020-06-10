import { createStore } from 'redux'

const states = {
    name: 'jerry',
    age: 15
}

const add = (data,param) => {
     data.name = data.name + '1'
     data.age =  data.age + param.param
     return  JSON.parse(JSON.stringify(data))
}


const del = data => {
    data.name = data.name.substring(0,data.name.length-2)
    data.age =  data.age - 1
    return  JSON.parse(JSON.stringify(data))
}



const fitstReducer = (state = states, action) => {
    switch (action.type) {
        //当传⼊action的type为add的时候给state+1
        case 'add':
            return add(state,action);
        //当传⼊action的type为reduce的时候给state-1
        case 'reduce':
            return del(state);
        //当传⼊的都不是以上的类型是返回旧的state
        default:
            return state;
    }
}
//创建数据仓库，把我们编写的reducer作为参数传⼊createStore
const store = createStore(fitstReducer)
export default store