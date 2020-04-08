import React,{Component} from 'react';

class LoginArea extends Component{
    render(){
        return(
            <div className="loginArea">
                <h3>로그인 에어리어</h3>
                <form 
                  action="/"
                  method="post"
                  onSubmit={function(e){
                      e.preventDefault();
                      this.props.onSubmit(
                          e.target.id.value,
                          e.target.pw.value
                      );
                  }.bind(this)}
                >
                    ID <input type="text" name="id" placeholder="ID를 입력하세요" className="loginArea__id"></input><br></br>
                    PW <input type="password" name="pw" placeholder="PW를 입력하세요" className="loginArea__pw"></input><br></br>
                    <input type="submit" value="로그인" className="loginArea__submit-btn"></input>
                </form>
                <a 
                  href="/"
                  onClick={function(e){
                      e.preventDefault();
                      this.props.onChangeMode();
                  }.bind(this)}
                >회원가입</a>
            </div>
        );
    }
}

export default LoginArea;