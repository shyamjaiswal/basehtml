import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../Action/Action'

class ApiView extends React.Component {

    componentDidMount() {
        const { fetchUser } = this.props;
        fetchUser();
    }

    render() {
        const { userData, userError } = this.props;
        console.log("userError = ", userError);
        return (
            <ul>
                {
                    userData && userData.length > 0 &&
                    userData.map((data, i) => (
                        <li key={i}>{data.name}</li>
                    ))
                }
            </ul>

        )
    }

}

function mapStateToProps(state) {
    const { userData } = state;
    return {
        userData: (userData || {}).data,
        userError: (userData || {}).error,
    }
}

export default connect(mapStateToProps, {
    fetchUser
})(ApiView);