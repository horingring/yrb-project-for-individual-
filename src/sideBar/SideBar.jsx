import React,{Component} from 'react';
import MemberArea from './login/MemberArea';

class SideBar extends Component{
    render(){
        return(
            <div className="sideBar">
                <h1>사이드 바 영역</h1>
                <MemberArea></MemberArea>
            </div>
        );
    }
}

export default SideBar;