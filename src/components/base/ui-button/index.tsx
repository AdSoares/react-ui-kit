import React from 'react';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    activeToogleClicked?: boolean
}

export interface ButtonState {
}

class Button extends React.Component<ButtonProps, ButtonState> {
    
    constructor(props: ButtonProps) {
        super(props);

        this.state = {
        };
    }

    render() { 

        let children: React.ReactNode = this.props.children ?? 'Button';
        
        return ( 
            React.createElement('button', this.props, children)
        );
    }
}
 
export default Button;