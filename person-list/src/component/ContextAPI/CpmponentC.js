import React, { Component } from 'react';
import ComponentD from './CpmponentD';

class ComponentC extends Component {
    render() {
        return (
            <div>
                ComponentC
                <ComponentD />
            </div>
        )
    }
}

export default ComponentC;
