import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../../components/base/ui-button';

export default {
  title: 'Button',
  component: Button,
};

export const Default = () => <Button onClick={action('clicked')}></Button>;

export const SimpleUse = () => <Button onClick={action('clicked')}>Hello World!</Button>;
 
class WithLoadingExample extends React.Component<any, any> {
  
  constructor(props: any) {
    super(props);
    this.state = { 
        buttonId: 'button_' + Math.random(),
        isLoading: false  
    };
  }
  
  startProcess = () => {

      this.setState({
          buttonId: 'button_' + Math.random(),
          isLoading: true  
      });

      setInterval(() => {
          this.setState({
              buttonId: 'button_' + Math.random(),
              isLoading: false  
          });
      }, 5000);
  }
  
  render() { 
    if (!this.state.isLoading) {
      return ( 
        <Button 
            onClick={this.startProcess}
            activeToogleClicked={true}
        >
            Click
        </Button>
      );
    } else {
      return ( 
        <Button 
            disabled
        >
            Loading...
        </Button>
      );
    }
  }
}
 
export const WithLoading = () => <WithLoadingExample></WithLoadingExample>;