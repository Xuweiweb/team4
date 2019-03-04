import React, { Component } from 'react'
import { connect } from 'dva';
import { getBannerList } from "../../services/example"
import { Button, Input, Form, Checkbox, Layout, Menu } from 'element-react';
import 'element-theme-default';
import style from "./index.css"
import styles from "../../common/common.css"
import Addexam from "../addExam"
import { Router, Link,Route, Switch, Redirect } from 'dva/router';
let mapState = store => {

}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[]
        }
    }

    render() {
       
        return (
            <div className={style.home}>
            
                <header>
                    <p>
                        网站工程
                    </p>
                    <div className={style.right}>
                        <p>亲爱的w916peach,您的身份是管理员,您上次的登录时间是2019年3月2日-9时7分9秒</p>
                        <Button className={style.loginBtn} type="primary" onClick={this.handleSubmit}>退出登录</Button>
                    </div>
                </header>
                <div className={style.count}>
                    <Layout.Row className={style.row}>
                        <Layout.Col className={style.col} span={24}>
                            <Menu defaultActive="2" className={style.colors} onOpen={this.onOpen.bind(this)} onClose={this.onClose.bind(this)}>
                                <Menu.SubMenu index="1" title={<span><i className="el-icon-message"></i>
                                试题管理
                                </span>}>
                                    <Menu.ItemGroup className={style.bg} title="">
                                        <Menu.Item index="1-1">
                                            <Link to="/home/addexam">添加试题</Link>
                                        </Menu.Item>
                                        <Menu.Item index="1-2">
                                            试题分类                                         
                                        </Menu.Item>
                                        <Menu.Item index="1-3">查看试题</Menu.Item>
                                    </Menu.ItemGroup>
                                </Menu.SubMenu>
                                <Menu.SubMenu index="2" title={<span><i className="el-icon-menu"></i>用户管理</span>}>
                                    <Menu.ItemGroup className={style.bg} title="">
                                        <Menu.Item index="2-1">添加用户</Menu.Item>
                                        <Menu.Item index="2-2">用户展示</Menu.Item>
                                    </Menu.ItemGroup>
                                </Menu.SubMenu>
                                <Menu.SubMenu index="3" title={<span><i className="el-icon-setting"></i>考试管理</span>}>
                                    <Menu.ItemGroup className={style.bg} title="">
                                        <Menu.Item index="3-1">添加考试</Menu.Item>
                                    </Menu.ItemGroup>
                                </Menu.SubMenu>
                            </Menu>
                        </Layout.Col>
                    </Layout.Row>
                    <div className={style.con}>
                        <Route path="/home/addexam" component={Addexam} />
                    </div>
                </div>
            </div>
        )
    }

    onOpen() {

    }

    onClose() {

    }

    componentDidMount() {

    }
    onSelect() {

    }
}

export default connect(mapState)(Login);
