import React, {FunctionComponent} from 'react';
import './Bubble.scss';

export interface IBubbleProps {
  id: number;
  isPoppable?: boolean;
  onPop: (index: number) => void;
}

export const Bubble: FunctionComponent<IBubbleProps> = ({id, isPoppable, onPop}) => {
  return (
    <div className="BubbleContainer">
      <div className={`Bubble ${isPoppable ? '' : 'popped'}`} onClick={() => onPop(id)} />
    </div>
  );
};
