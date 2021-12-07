import React from 'react';

import { TwitterTimelineEmbed } from 'react-twitter-embed';

const TwitterTimeLine = () => {

 
  return (
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="chrispaladin7" 
        options={{height: 650}}
        />
  );
}

export default TwitterTimeLine;