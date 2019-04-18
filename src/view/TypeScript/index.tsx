import * as React from 'react'
import * as fastclick from 'fastclick'
import { Toast, Button } from 'antd-mobile'

let isDone:boolean = false


interface FormProps {
  first_name: string;
  last_name: string;
}

interface FormState {
  first_name: string;
  last_name: string;
}
const incrementClicksCount = (prevState: State) => ({
  clicksCount: prevState.clicksCount + 1,
});
const decrementClicksCount = (prevState: State) => ({
  clicksCount: prevState.clicksCount - 1,
});
const initialState = { clicksCount: 0 };
type State = Readonly<typeof initialState>

class Hello extends React.Component<{}, State > {
  readonly state: State = initialState;
  componentDidMount(){
    
  }
  public render () {
    const { clicksCount } = this.state;
    return (
      <div>
        <Button>4444</Button>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        You've clicked me {clicksCount} times!
      </div>
    )
  }
  private handleIncrement = () => this.setState(incrementClicksCount);
  private handleDecrement = () => this.setState(decrementClicksCount);

}

export default Hello