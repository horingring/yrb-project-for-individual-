import React,{Component} from 'react';

class LoginComplete extends Component {
  render(){
    return (
      <div className="loginComplete">
          로그인 완료<br></br>
          {this.props.nick} 님 환영합니다.<br></br>
          <button
            onClick={function(){
                if(window.confirm('정말 로그아웃 하시겠습니까?')){
                    this.props.onLogout();
                }
            }.bind(this)}
          >로그아웃</button>
      </div>
    );
  }
}

export default LoginComplete;
