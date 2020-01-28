import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div className='header' style={{ float: 'left', width: '100%', padding: '15px 0 25px' }}>
                <ul style={{ float: 'left', width: '100%' }}>
                    <li style={{ float: 'left', paddingRight: '35px' }}><Link to='/'>Home</Link></li>
                    <li style={{ float: 'left', paddingRight: '35px' }}><Link to='/form-validation'>FormValidation</Link></li>
                    <li style={{ float: 'left', paddingRight: '35px' }}><Link to='/sortable-demo'>SortableDemo</Link></li>
                    <li style={{ float: 'left', paddingRight: '35px' }}><Link to='/printconfirmation'>PrintConfirmation</Link></li>
                    <li style={{ float: 'left', paddingRight: '35px' }}><Link to='/documentsdetails'>DocumentsDetails</Link></li>
                    <li style={{ float: 'left', paddingRight: '35px' }}><Link to='/login'>Login</Link></li>
                    <li style={{ float: 'left', paddingRight: '35px' }}><Link to='/login2'>Login2</Link></li>
                    <li style={{ float: 'left', paddingRight: '35px' }}><Link to='/contextapi'>ContextAPI</Link></li>
                    <li style={{ float: 'left', paddingRight: '35px' }}><Link to='/apiview'>ApiView</Link></li>
                    <li style={{ float: 'left', paddingRight: '35px' }}><Link to='/todo'>TodoList</Link></li>
                </ul>
            </div>
        )
    }
}
export default Header;