import React,{Component} from 'react';

class JoinMember extends Component {
  render(){
    return (
      <div className="joinMember">
          <h3>회원가입 페이지</h3>
          <form
            action="/"
            method="post"
            onSubmit={function(e){
              e.preventDefault();
              this.props.onSubmit(
                e.target.id.value,
                e.target.pw.value,
                e.target.nick.value
              );
            }.bind(this)}
          >
            ID <input type="text" name="id" placeholder="ID를 입력하세요"></input><br></br>
            PW <input type="password" name="pw" placeholder="PW를 입력하세요"></input><br></br>
            NICK <input type="text" name="nick" placeholder="닉네임을 입력하세요"></input><br></br>
            <input type="submit" value="회원가입"></input>
          </form>
      </div>
    );
  }
}

export default JoinMember;
