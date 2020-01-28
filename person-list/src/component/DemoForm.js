import React from 'react';
import Modal from './Modal';

class DemoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            number: '',
            dataHtml: null,
            mydata: [],
            isOpen: false,
        }
    };

    inputHandler = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        })
    };
    submitHandler = (e) => {
        e.preventDefault();
        let { fullName, number } = this.state;

        const formData = {
            fullName,
            number
        };
        this.setState({
            mydata: [...this.state.mydata, formData],
            isOpen: true,
        });

    };

    closeModal = () => {
        this.setState({
            isOpen: false,
        });
    };

    render() {
        let { fullName, number, mydata, isOpen, error } = this.state;

        let dataHtml = '';
        if (mydata) {
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
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>Name:</label>
                        <input type='text' value={fullName} name='fullName' placeholder='Ex. Shyam' onChange={this.inputHandler} />
                        {error && <span>Please fill valid Name</span>}
                    </div>
                    <div>
                        <label>Mob No.:</label>
                        <input type='number' value={number} name='number' placeholder='8468970857' onChange={this.inputHandler} />
                        {error && <span>Please fill Mobile No.</span>}
                    </div>


                    <input type='submit' />
                </form>
                <span>
                    {dataHtml}
                    {isOpen && <Modal closeModal={this.closeModal} />}
                </span>
            </div>
        )
    }
}

export default DemoForm;