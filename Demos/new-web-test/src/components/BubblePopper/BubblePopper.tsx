import React, {FunctionComponent, useState} from 'react';
import {Box, Heading} from 'grommet';
import {Bubble} from './Bubble';

const initialBubbles: boolean[] = Array(100).fill(true);

export const BubblePopper: FunctionComponent = () => {
  const [bubbles, setBubbles] = useState(initialBubbles);

  const handlePop = (index: number) => {
    if (bubbles[index] === true) {
      const newBubbles = [...bubbles];
      newBubbles[index] = false;

      setBubbles(newBubbles);
      window.navigator.vibrate(100);
    }
  };

  return (
    <Box pad="small" fill width="100%" align="center">
      {/* eslint-disable-next-line */}
      <Heading responsive>🧼 Bubblerappr 🧼</Heading>

      <div className="BubbleWrap">
        {bubbles.map((isPoppable, index) => (
          <Bubble id={index} isPoppable={isPoppable} onPop={handlePop} />
        ))}
      </div>
    </Box>
  );
};
