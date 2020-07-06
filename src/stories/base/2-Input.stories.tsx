import React from 'react';
import Input from '../../components/base/ui-input';

export default {
  title: 'Input',
  component: Input,
};

export const Simple_use = () => <Input></Input>;

const styleApplyingStyle = { 
    backgroundColor: 'gray', 
    border: '2px solid blue',
    color: 'white',
    borderRadius: '3px'
};

export const Applying_style = () => <Input style={styleApplyingStyle}></Input>;


import './baseStyle.css';

export const Applying_CSS_class = () => <Input className={'story-testing'}></Input>;