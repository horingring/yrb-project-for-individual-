import React,{Component} from 'react';

class LoginArea extends Component{
    render(){
        return(
            <div className="loginArea">
                <h1>로그인 에어리어</h1>
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
                    <input type="submit" value="로그인" className="loginArea__submit"></input>
                </form>
            </div>
        );
    }
}

export default LoginArea;