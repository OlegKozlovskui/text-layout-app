import React, { useState, useRef, ChangeEvent, MutableRefObject } from 'react';
import useOutsideClick from "@rooks/use-outside-click";

import ColEdit from './ColEdit';

type Props = {
  idx: number;
  colActive: number;
  colText: string;
  onColChange: (event: ChangeEvent<HTMLTextAreaElement>, idx: number) => void;
}

const colMap = new Map([
  [1 , 12],
  [2, 6],
  [3, 4]
]);

const Col: React.FC<Props> = ({ idx, colActive, colText, onColChange }) => {
  const [isEditing, setEditing] = useState<boolean>(false);
  const colRef = useRef() as MutableRefObject<HTMLDivElement>;

  const handleOutsideClick = () => {
    if (isEditing) {
      setEditing(false);
    }
  };

  useOutsideClick(colRef, handleOutsideClick);

  return (
    <div
      className={`col col-${colMap.get(colActive)}`}
      onClick={() => setEditing(true)}
      ref={colRef}
    >
      {!isEditing ? colText : <ColEdit text={colText} onChange={e => onColChange(e, idx)} /> }
    </div>
  );
};

export default Col;
