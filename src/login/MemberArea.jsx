import React,{Component} from 'react';
import LoginArea from './LoginArea';
import LoginComplete from './LoginComplete';

class MemberArea extends Component {
  constructor(props){
    super(props);
    this.loginChecker = false;
    // 로그인 시 member가 아닐 경우(반복문의 조건이 하나도 일치하지 않을 경우) 
    // alert(로그인 실패)를 띄우기 위해
    // loginChecker를 두었지만.. 이것 말고 다른 방법은 없을까?
    this.state = {
      mode : 'loginArea',
      member : [
        {m_idx:1, id:'yrb', pw:'yrb1234', nick:'관리자'},
        {m_idx:2, id:'horingring', pw:'horing1234', nick:'호링링'}
      ],
      session : null
    };
  }
  render(){
    var memberArea = null;
    if(this.state.mode === 'loginArea'){
      memberArea = 
        <LoginArea
          onSubmit={function(_id,_pw){
            if(_id===''||_pw===''){
              alert('ID 또는 PW를 입력하지 않으셨습니다.');
            }else{
              var i=0;
              var member = this.state.member;
              while(i<member.length){
                if(_id===member[i].id && _pw===member[i].pw){
                  this.loginChecker = true;
                  this.setState({
                    mode : 'loginComplete',
                    session : {m_idx:member[i].m_idx, nick:member[i].nick}
                  });
                  break;
                }
                i=i+1;
              }if(this.loginChecker !== true){
                alert('ID 또는 PW를 확인하여 다시 입력해주세요.');
              }
            }
          }.bind(this)}
        ></LoginArea>;
    }else if(this.state.mode === 'loginComplete'){
      memberArea = 
        <LoginComplete
          nick={this.state.session.nick}
          onLogout={function(){
            this.loginChecker=false;
            this.setState({
              session : null,
              mode : 'loginArea'
            });
          }.bind(this)}
        ></LoginComplete>;
    }

    return (
      <div className="memberArea">
        {memberArea}
      </div>
    );
  }
}

export default MemberArea;
