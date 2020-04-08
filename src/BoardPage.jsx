import React,{Component} from 'react';
import MemberArea from './login/MemberArea';
import './BoardPage.css';

class BoardPage extends Component {
  render(){
    return (
      <div className="boardPage">
        <MemberArea></MemberArea>
      </div>
    );
  }
}

export default BoardPage;
