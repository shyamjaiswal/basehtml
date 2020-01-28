import React, { Component } from 'react';
import { Tabs } from '../style'

class Login2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 1
        }
    }
    handleTab = (activeTab) => {
        this.setState({
            activeTab
        })
    }
    render() {
        const { activeTab } = this.state;
        return (
            <div className='login-panel'>
                <div className='tabs'>
                    <ul>
                        <li style={Tabs} onClick={() => this.handleTab('1')} className={"tabs" + (activeTab === 1 ? ' active' : '')}>User Type1</li>
                        <li style={Tabs} onClick={() => this.handleTab('2')} className={"tabs" + (activeTab === 2 ? ' active' : '')}>User Type2</li>
                        <li style={Tabs} onClick={() => this.handleTab('3')} className={"tabs" + (activeTab === 3 ? ' active' : '')}>User Type3</li>
                    </ul>
                    <div className='panel'>{this.state.activeTab}</div>
                </div>
            </div>

        )

    }
}

export default Login2;