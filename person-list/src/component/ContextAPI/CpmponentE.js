import React, { Component } from 'react';
import { UserProvider, UserConsumer } from './UserContext';


class ComponentE extends Component {

    render(props) {
        console.log('Context', this.props)
        return (
            <div>
                I am context API example. i am Happy for Now!!!
                {/* <UserProvider value='Provide by E'> */}
                <UserConsumer>
                    {
                        (use) => {
                            return use
                        }
                    }
                </UserConsumer>

                {/* </UserProvider> */}
            </div>
        )
    }
}

export default ComponentE;
