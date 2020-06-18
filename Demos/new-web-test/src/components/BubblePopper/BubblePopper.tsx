import React, {FunctionComponent, useEffect, useState} from 'react';
import {Button, Box, Meter, Text, DataTable, Heading} from 'grommet';
import {Bubble} from './Bubble';

const initialBubbles: boolean[] = Array(100).fill(true);

export const BubblePopper: FunctionComponent = () => {
  const [bubbles, setBubbles] = useState(initialBubbles);

  const handlePop = (index: number) => {
    const newBubbles = [...bubbles];
    newBubbles[index] = false;

    setBubbles(newBubbles);
  };

  return (
    <Box pad="small" fill width="100%" align="center">
      <Heading>🧼 Bubblewrappr 🧼</Heading>

      <div className="BubbleWrap">
        {bubbles.map((isPoppable, index) => (
          <Bubble id={index} isPoppable={isPoppable} onPop={handlePop} />
        ))}
      </div>
    </Box>
  );
};
