import React,{Component} from 'react';
import LoginArea from './LoginArea';
import LoginComplete from './LoginComplete';
import JoinMember from './JoinMember';

class MemberArea extends Component {
  constructor(props){
    super(props);
    this.loginChecker = false;
    this.max_m_idx=2;
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
          onChangeMode={function(){
            this.setState({
              mode : 'joinMember'
            });
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
    }else if(this.state.mode === 'joinMember'){
      memberArea = 
        <JoinMember
          onSubmit={function(_id,_pw,_nick){
            this.max_m_idx = this.max_m_idx+1;
            var _member = this.state.member.concat(
              {m_idx:this.max_m_idx, id:_id, pw:_pw, nick:_nick}
              );
            this.setState({
              member : _member,
              mode : 'loginArea'
            });
            alert(_nick+' 님, 회원가입이 완료되었습니다!\n이제 로그인하실 수 있습니다.');
          }.bind(this)}
        ></JoinMember>;
    }

    return (
      <div className="memberArea">
        <h2>멤버 에어리어</h2>
        {memberArea}
      </div>
    );
  }
}

export default MemberArea;
