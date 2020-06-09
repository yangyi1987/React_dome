import React from 'react'

import '../assets/css/login.css'

class login extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      account: null,
      password: null,
      userType: null,
      type: [
        {
          userType: "用户",
          checkbox: false
        },
        {
          userType: "管理员",
          checkbox: false
        }
      ]
    }
  }
  login=(e)=>{
    e.preventDefault();
    console.log(this.state.account)
    console.log(this.state.password)
    console.log(this.state.userType)
  }
  handName = (e) =>{
    this.setState({
      account: e.target.value
    })
  }
  handPassword=(e)=>{
    this.setState({
      password: e.target.value
    })
  }
  HandCheckbox(key){
    var userType
    const ChangType = this.state.type
    ChangType[key].checkbox = !ChangType[key].checkbox
    // console.log(ChangType[key].checkbox)
    if(ChangType[key].checkbox){
      userType = this.state.type[key].userType
    } else{
      userType = null
    }
    this.setState({
      userType: userType,
      type: ChangType
    })
  }
  render(){
    return(
      <div className="login">
        {/* 用户登录框 */}
        <div className="login_list">
          <form className="login_from" onSubmit={this.login}>
            <label className="login_title" name="系统标题">综合测评系统</label><br/>
            <label name="账号">账号</label><input type="text" defaultValue={this.state.account} onChange={this.handName}  placeholder="请输入账号" maxLength={15}/><br/>
            <label name="账号">账号</label><input type="password" defaultValue={this.state.password} onChange={this.handPassword}  placeholder="请输入密码" /><br/>
            {
              this.state.type.map((value,key)=>{
                return(
                  <span key={key}>
                    <input type="checkbox" checked={value.checkbox} onChange={this.HandCheckbox.bind(this,key)} /><span>{value.userType}</span>
                  </span>
                )
              })
            }<br/>
            <button name="登录" type="submit">登录</button>
            <button name="注册">注册</button>
          </form>
        </div>
      </div>
    )
  }
}

export default login;