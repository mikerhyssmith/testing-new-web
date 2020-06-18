import React, {FunctionComponent, useEffect, useState} from 'react';
import {Button, Box, Meter, Text, DataTable, Heading} from 'grommet';

import './Bubble.scss';

export interface IBubbleProps {
  id: number;
  isPoppable?: boolean;
  onPop: (index: number) => void;
}

export const Bubble: FunctionComponent<IBubbleProps> = ({id, isPoppable, onPop}) => {
  return (
    <Box width="100%" align="center">
      <div className={`Bubble ${isPoppable ? '' : 'popped'}`} onClick={() => onPop(id)} />
    </Box>
  );
};
