import React, { Component } from 'react'
import { Layout, Breadcrumb, Menu ,Row,Col} from 'antd';
import './adminLess.less'
import logoLeft from '../images/logo1.png'
const { Header, Footer, Sider, Content } = Layout;

/* 
后台管理的路由组件
*/
export default class Admin extends Component {
  constructor(props,context){
    super(props, context)
    this.state = {
    }
  }
  headerHandel = ()=>{
    const Param = <div>
      <img src={logoLeft} className="logoLeft"></img>
      <ul></ul>
    </div>
    return Param
  }
  

  render() {
 
    return (
      <div>
        <Layout>
          <Header>
          {this.headerHandel()}

          </Header>
        </Layout>
      </div>
    )
  }
}
