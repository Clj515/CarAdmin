/* 
应用的根组件
*/
import React,{Component} from 'react'
import { BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './pages/Login/Login'
import Admin from './pages/Admin/Admin'


export default class App extends Component {

  render(){//返回虚拟DOM对象
    return(
      <BrowserRouter>
        <Switch>{/* 匹配到一个就不需要其他的了 */}
          <Route path='/login' component={Login}></Route>
          <Route path='/' component={Admin}>首页</Route>
        </Switch>
    
      </BrowserRouter>
    )
  }
};
