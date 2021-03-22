import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './login.less'
import logo from './images/logo.jpg'
const Item = Form.Item /* 不能写在import之前 */

/* 
登录路由组件
*/
export default class Login extends Component {

  handelonFinish = (values)=>{
    console.log('Received values of form: ', values);
    const{username,password} = values

  }

  render() {
    console.log(this.props);
    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo" className="logo"></img>
          <h1>航海王主题-车辆售后服务管理系统</h1>
        </header>
        <section className="login-content">
          <h2>用户登录</h2>
          <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={this.handelonFinish}>
            <Item name="username" rules={[{ required: true, message: '请输入您的用户名!' },{pattern:/^[\w]{4,15}$/,message:"必须是英文数字或下划线，且长度在4~15位之间"}]}>
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
            </Item>
            <Item name="password" rules={[{ required: true, message: '请输入您的密码!' },{pattern:/^[\w]{4,15}$/,message:"密码必须是英文数字或下划线，且长度在4~15位之间"}]}>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
              />
            </Item>
            <Item>
              <Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>记住我</Checkbox>
              </Item>

              <a className="login-form-forgot" href="">
                忘记密码？
              </a>
            </Item>

            <Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
              <Button type="link"  className="login-form-button">
                去注册
              </Button>
               
            </Item>
          </Form>
        </section>
      </div>
    )
  }
}
