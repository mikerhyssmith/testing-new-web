import React, {FunctionComponent, useState} from 'react';
import {Box, Heading} from 'grommet';
import {Bubble} from './Bubble';

const initialBubbles: boolean[] = Array(99).fill(true);

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
      <Heading style={{color: '#CD6ABA', fontFamily: 'Pacifico, cursive'}} responsive>
        <span role="img" aria-label="Bubblerappr">
          🧼
        </span>{' '}
        Bubblerappr{' '}
        <span role="img" aria-label="Bubblerappr">
          🧼
        </span>
      </Heading>

      <div className="BubbleWrap">
        {bubbles.map((isPoppable, index) => (
          <Bubble id={index} isPoppable={isPoppable} onPop={handlePop} />
        ))}
      </div>
    </Box>
  );
};
