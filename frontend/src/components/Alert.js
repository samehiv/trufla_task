import React from 'react';

function Alert({ message }) {


  function errros() {
    if(message.errors && message.errors.length > 0) {
      return (
        message.errors.map((e,i) => (<div key={i}> {e} </div>))
      )
    }
  }

  return (
    <div className="alert-container">
      {Object.keys(message).length > 0 &&
        <div className={`alert alert-${message.level}`}>
          <div className="font-weight-bold"> {message.message} </div>
          { errros() }
        </div>
      }
    </div>
  )
}


export default Alert