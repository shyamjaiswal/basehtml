import React from 'react'
import { Stylemodal, SuccessBtn, AlertBtn, CrossBtn, Ovelay } from './style'

class Modal extends React.Component {
    // console.log('Statw', this.props);


    render() {
        const { closeModal, printFormData } = this.props;
        // console.log(this.props, '<<<<<<<<<<<<<<<<')
        return (
            <div style={Ovelay}>
                <div style={Stylemodal}>
                    <span style={CrossBtn} onClick={closeModal} className='cross'>X</span>
                    <div>Are you sure? You wants print the data?</div>
                    <button style={SuccessBtn} onClick={printFormData} value='checkPrintYes' >Continue Print</button>
                    <button style={AlertBtn} className='alert btn' onClick={closeModal} value='checkPrintNo'>Abort Print</button>
                </div>
            </div>
        )

    }
}

export default Modal;