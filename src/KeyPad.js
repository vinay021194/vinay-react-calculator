import React, { Component } from 'react';

class KeyPad  extends Component {
    render() {
        return (
            <div>
                <button name='+'>+</button>
                <button name='-'>-</button>
                <button name='*'>*</button>
                <button name='/'>/</button>
                <button name='='>=</button>
            </div>
        );
    }
}

export default KeyPad;