import React from 'react';
import Modal from './Modal';

class FormValidation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            number: '',
            dataHtml: null,
            mydata: [],
            isOpen: false,
            errors: {},
            checkPrintYes: true,
            checkPrintNo: false,
        }
    };

    inputHandler = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        })
    };
    validateForm = () => {
        let { fullName, errFullName, errors } = this.state
        let flag = true;
        const obj = {};
        if (fullName === '') {
            obj.fullName = 'Pls fill Name';
            console.log('errFullName =>', errFullName)
            flag = false;
        }
        this.setState({
            errors: obj
        })
    }
    isPrintForm = () => {
        let { checkPrintYes, checkPrintNo } = this.state;
        // console.log('checkPrintYes', checkPrintYes)
        if (checkPrintYes) {
            checkPrintYes = true;
            checkPrintNo = false;
            console.log('gggg', checkPrintYes);

        };
        this.setState({
            checkPrintYes: false,
        });
    }
    submitHandler = (e) => {
        e.preventDefault();
        let isValid = this.validateForm;
        let { fullName, number } = this.state;
        console.log(isValid);
        if (isValid) {

            console.log('isPrintForm', this.isPrintForm);
            const formData = {
                fullName,
                number
            };
            this.setState({
                mydata: [...this.state.mydata, formData],
                isOpen: true,
            });
        }
    };

    closeModal = () => {
        this.setState({
            isOpen: false,
        });
    };

    render() {
        let { fullName, number, mydata, isOpen, errors } = this.state;
        let dataHtml = '';
        if (mydata) {
            console.log('MYDATA', mydata);
            dataHtml = mydata.map(function (data, i) {

                return (
                    <div>
                        <p><strong>{data.fullName} </strong><span>{data.number}</span></p>
                    </div>
                )
            });
        }
        return (
            <div className='formContainer'>
                <h2> Form Validation </h2>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>Name:</label>
                        <input type='text' value={fullName} name='fullName' placeholder='Ex. Shyam' onChange={this.inputHandler} />
                        {errors.fullName && <div className="test"> {errors.fullName} </div>}
                    </div>
                    <div>
                        <label>Mob No.:</label>
                        <input type='number' value={number} name='number' placeholder='8468970857' onChange={this.inputHandler} />
                    </div>
                    <input type='submit' />
                </form>
                <span>
                    {dataHtml}
                    {isOpen && <Modal closeModal={this.closeModal} isPrintForm={this.isPrintForm} />}
                </span>
            </div>
        )
    }
}

export default FormValidation;