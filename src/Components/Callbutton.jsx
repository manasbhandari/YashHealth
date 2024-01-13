import React from 'react';
import call from "../Assets/call.png"

class CallButton extends React.Component {
  state = {
    phoneNumber: '9424079746',
  };

  handleClick = () => {
    window.open(`tel:${this.state.phoneNumber}`);
  };

  render() {
    return (
      <div className='fixed bottom-0 right-0 m-4'>
        <button onClick={this.handleClick} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm  px-5 py-2.5 me-2 mb-2 dark:bg-blue-600  focus:outline-none "> <div>
            <img className='h-8' src={call} alt="" />
            </div> </button>
      </div>
    );


  }
}

export default CallButton;