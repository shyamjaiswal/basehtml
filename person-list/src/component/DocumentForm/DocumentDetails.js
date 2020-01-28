import React, { Component } from 'react';

class DocumentsDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    changeHandler = (event) => {
        // const { doc } = this.state;
        this.setState({
            value: event.target.value
        })
    }
    render() {
        const { value } = this.state;
        return (
            <div>
                <form>
                    <div className='row'>
                        {this.state.value && <h1> You are selected for {this.state.value}.</h1>}

                        <select onChange={this.changeHandler}>
                            <option disabled selected value> -- select an option -- </option>
                            <option value='AdharCard'>Adhar Card</option>
                            <option value='PanCard'>Pan Card</option>
                            <option value='VoterId'>Voter Id</option>
                            <option value='Other'>Other</option>
                        </select>
                        {console.log('This is state in render', this.state)}
                        {
                            value === 'AdharCard' ?
                                <div className='row lg'>
                                    <label>Adhar Card :</label>
                                    <input type='text' name='CardName' value='AAAAA00000000000' />
                                </div>

                                : ''}
                        {
                            value === 'PanCard' ?
                                <div className='row lg'>
                                    <label>Pan Card :</label>
                                    <input type='text' name='PanCard' value='PAN00000000000' />
                                </div>
                                : ''
                        }
                        {
                            value === 'VoterId' ?
                                <div className='row lg'>
                                    <label>Voter Card :</label>
                                    <input type='text' name='VoterId' value='VOTER00000000000' />
                                </div>
                                : ''}
                        {
                            value === 'Other' ?
                                <div className='row lg'>
                                    <label>Other :</label>
                                    <input type='text' name='Other' value='OTHER00000000000' />
                                </div>
                                : ''
                        }
                        <div className='row lg'>
                            <label>City :</label>
                            <input type='text' name='city' value='city' />
                        </div>
                        <div className='row lg'>
                            <label>Mob :</label>
                            <input type='text' name='mob' value='mob' />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default DocumentsDetails;