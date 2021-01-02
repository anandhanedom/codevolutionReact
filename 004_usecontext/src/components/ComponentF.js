import React from 'react';

import { UserContext, ChannelContext } from '../App';

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <h3>
                    User context value <u>{user}</u>, channel context value
                    <u> {channel}</u>
                  </h3>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
