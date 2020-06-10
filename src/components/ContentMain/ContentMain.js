import React from 'react'
import { withRouter, Switch, Redirect } from 'react-router-dom'
import LoadableComponent from '../../utils/LoadableComponent'
import PrivateRoute from '../PrivateRoute/PrivateRoute'



//基本组件Demo
const Option1 = LoadableComponent(()=>import('../../routers/option1/option'))
const Option2 = LoadableComponent(()=>import('../../routers/option2/option2'))
const Page1 = LoadableComponent(()=>import('../../routers/page1/page1'))
const Page2 = LoadableComponent(()=>import('../../routers/page2/page2'))
const FirstPage = LoadableComponent(()=>import('../../routers/firstPage/firstPage'))

const SpaceIntro = LoadableComponent(()=>import('../../views/SpaceIntro/SpaceIntro'))

@withRouter
class ContentMain extends React.Component {
  render () {
    return (
     
        <Switch>
          <PrivateRoute exact path='/SpaceIntro' component={SpaceIntro}/>
          <PrivateRoute exact path='/firstPage' component={FirstPage}/>
          <PrivateRoute exact path='/option1' component={Option1}/>
          <PrivateRoute exact path='/option2' component={Option2}/>
          <PrivateRoute exact path='/pages/page1' component={Page1}/>
          <PrivateRoute exact path='/pages/page2' component={Page2}/>
          <Redirect exact from='/' to='/SpaceIntro'/>
        </Switch>
      
    )
  }
}

export default ContentMain 
