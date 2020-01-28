import React, { Component } from 'react';
import ComponentB from './CpmponentB';

class ComponentA extends Component {
    render() {
        return (
            <div>
                ComponentA
                <ComponentB />
            </div>
        )
    }
}

export default ComponentA;
