import React from 'react';
 
export interface ButtonState {
    
}
 
class Input extends React.Component<React.InputHTMLAttributes<HTMLInputElement>, ButtonState> {
    
    constructor(props: React.InputHTMLAttributes<HTMLInputElement>) {
        super(props);
    }

    render() {
        return ( 
            React.createElement('input', this.props)
        )
    }
}
 
export default Input;