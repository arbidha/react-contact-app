import React, { Component } from 'react';

class ListContacts extends Component{
    render(){
        console.log('Props:', this.props);
        return(
            <ol className= 'contact-list'>
                <li>{this.props.contacts}</li>
            </ol>
        );
    }

}

export default ListContacts;