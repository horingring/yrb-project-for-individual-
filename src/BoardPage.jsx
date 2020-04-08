import React,{Component} from 'react';
import './BoardPage.css';
import Header from './header/Header';
import SideBar from './sideBar/SideBar';
import Main from './main/Main';

class BoardPage extends Component {
  render(){
    return (
      <div className="boardPage">
        <Header></Header>
        <SideBar></SideBar>
        <Main></Main>
      </div>
    );
  }
}

export default BoardPage;
