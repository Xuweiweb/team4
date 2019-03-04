import React, { Component } from 'react'
import { connect } from 'dva';
import { getBannerList } from "../../services/example"
import { Button, Input, Form, Checkbox } from 'element-react';
import 'element-theme-default';
import style from "./index.css"

let mapState = store => {
    console.log(store)
    return { ...store.login }
}

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                username: '',
                pass: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    {
                        validator: (rule, value, callback) => {
                            if (value === '') {
                                callback(new Error('请输入用户名'));
                            } else {
                                callback();
                            }
                        }
                    }
                ],
                pass: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    {
                        validator: (rule, value, callback) => {
                            if (value === '') {
                                callback(new Error('请输入密码'));
                            } else {
                                if (this.state.form.username !== '') {
                                    this.refs.form.validateField('username');
                                }
                                callback();
                            }
                        }
                    }
                ]
            }
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this)
        this.refs.form.validate((valid) => {
            if (valid) {
                console.log(this.state.form.username, this.state.form.pass)
                if(true) {
                    this.props.history.push("/home")
                }
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    }

    onChange(key, value) {
        this.setState({
            form: Object.assign({}, this.state.form, { [key]: value })
        });
    }

    render() {
        return (
            <div className={style.login}>
                <h1>请登录</h1>
                <Form ref="form" model={this.state.form} rules={this.state.rules} labelWidth="100" className="demo-ruleForm">
                    <Form.Item label="" prop="username">
                        <Input type="text" value={this.state.form.username} onChange={this.onChange.bind(this, 'username')} autoComplete="off" />
                    </Form.Item>
                    <Form.Item label="" prop="pass">
                        <Input type="password" value={this.state.form.pass} onChange={this.onChange.bind(this, 'pass')} autoComplete="off" />
                    </Form.Item>
                    <Checkbox checked className={style.check}>记住密码</Checkbox>
                    <Button type="text" className={style.forget}>忘记密码</Button>
                    <Form.Item>
                        <Button className={style.loginBtn} type="primary" onClick={this.handleSubmit}>登录</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }

    componentDidMount() {
        getBannerList().then(res => {
            console.log(res)
            this.props.dispatch({
                type: 'login/fetch',
                payload: {
                    userToken: "123"
                }
            })
        })
    }
}

export default connect(mapState)(Login);
