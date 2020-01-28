import React, { Component } from 'react';
import Modal from './Modal'
import { SuccessBtn } from './style';

class PrintConfirmation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: '',
            lName: '',
            mail: '',
            isOpen: false,
            errors: {},
            data: [],
            paramData: [],
        }
    }

    validateForm = ({ fName, lName }) => {
        let flag = true;
        const obj = {}
        if (fName === '') {
            obj.fName = 'Please Enter First Name';
            flag = false;
        };
        if (lName === '') {
            obj.lName = 'Please Enter Last Name';
            flag = false;
        };
        this.setState({
            errors: obj,
        });
        if (flag) this.setState({
            isOpen: true,
        });
    }

    printFormData = () => {
        const { fName, lName, paramData } = this.state;
        this.setState({
            paramData: [...paramData, {
                fName,
                lName
            }],
            isOpen: false,
            fName: '',
            lName: '',
        });
    }

    submitHandler = (e) => {
        e.preventDefault();
        let { fName, lName } = this.state;
        const params = {
            fName,
            lName
        }
        this.validateForm(params);
    }

    inputHandler = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    closeModal = () => {
        this.setState({
            isOpen: false,
        });
    }

    render() {
        let { fName, lName, mail, isOpen, errors, paramData, ch } = this.state;
        console.log('this.props.children', ch);
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div className='row md center-self'>
                        <input onChange={this.inputHandler} type='text' placeholder='Ex. Shyam' value={fName} name='fName' />
                        {errors.fName && <div className="errMsg"> {errors.fName} </div>}
                    </div>
                    <div className='row md center-self'>
                        <input onChange={this.inputHandler} type='text' placeholder='jaiswal' value={lName} name='lName' />
                        {errors.lName && <div className="errMsg"> {errors.lName} </div>}
                    </div>
                    <div className='row md center-self'>
                        <input onChange={this.inputHandler} type='text' value={mail} name='mail' placeholder='shyam@test.com' />
                    </div>
                    <div className='row md center-self'>
                        <input style={SuccessBtn} type='submit' />
                    </div>
                </form>
                {isOpen && <Modal closeModal={this.closeModal} printFormData={this.printFormData} />}
                <div>{paramData && paramData.map(item => {
                    const { fName, lName } = item;
                    return <div>
                        <p>{fName}</p>
                        <p>{lName}</p>
                    </div>
                })}</div>
            </div>
        )
    }
}
export default PrintConfirmation;
