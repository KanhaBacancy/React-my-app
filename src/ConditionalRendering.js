
import React from 'react';

function ConditionalRendering() {
  const isLoggedIn = false;
  if (isLoggedIn) {
    return <div>You are logged in</div>;
  } else {
    return <div>You are logged out</div>;
  }
}
export  default ConditionalRendering;