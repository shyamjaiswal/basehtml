import React, { Component } from 'react';
import { Tabs } from '../style'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 1
        }
    }
    render() {
        return (
            <div className='login-panel'>
                <div className='tabs'>
                    <ul>
                        <li style={Tabs} onClick={() => { this.setState({ activeTab: 1 }) }} className='active'>User Type1</li>
                        <li style={Tabs} onClick={() => { this.setState({ activeTab: 2 }) }} className='tabs'>User Type2</li>
                        <li style={Tabs} onClick={() => { this.setState({ activeTab: 3 }) }} className='tabs'>User Type3</li>
                    </ul>
                    <div className='panel'>{this.state.activeTab}</div>
                </div>
            </div>

        )

    }
}

export default Login;