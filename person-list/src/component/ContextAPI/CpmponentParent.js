import React, { Component } from 'react';
import ComponentA from './CpmponentA';
import { UserProvider } from './UserContext';



class ComponentParent extends Component {
    render() {
        return (
            <div>
                ComponentParent
                {/* <UserProvider value='Provide by provider Parent'> */}
                <ComponentA />
                {/* </UserProvider> */}

            </div>

        )
    }
}

export default ComponentParent;
