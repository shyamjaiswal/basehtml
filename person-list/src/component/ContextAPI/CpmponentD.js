import React, { Component } from 'react';
import ComponentE from './CpmponentE';
import { UserConsumer } from './UserContext'

class ComponentD extends Component {
    render() {
        return (
            <div>
                ComponentD
                <UserConsumer>
                    {
                        (use) => {
                            return <div>{use}</div>
                        }
                    }
                </UserConsumer>
                <ComponentE />

            </div>
        )
    }
}

export default ComponentD;
