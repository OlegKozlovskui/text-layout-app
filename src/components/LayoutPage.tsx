import React, { Fragment, useContext, useState, useEffect, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';

import TextContext, { ITextContext } from '../context/TextContext';
import ColSwitcher from './ColSwitcher';
import Row from './Row';
import Col from './Col';
import { chunkArray } from '../utils/utils';

const LayoutPage: React.FC = () => {
  const [colActive, setColActive] = useState<number>(1);
  const [columns, setColumns] = useState<string[]>([]);
  const { text, setCurrentText } = useContext<ITextContext>(TextContext);
  const history = useHistory();

  useEffect(() => {
    if (!text) {
      history.push('/');
    }

    handleUpdateLayout(colActive);
  }, []);

  const handleUpdateLayout = (colActive: number) => {
    const textArr = text.split(' ');
    const total = textArr.length;
    const count = Math.ceil(total/colActive);
    const result = chunkArray(textArr, count);

    setColActive(colActive);
    setColumns(result);
  };

  const handleColChange = (e: ChangeEvent<HTMLTextAreaElement>, idx: number) => {
    const updatedColumns = columns.map((c, i) => {
      if (i === idx) {
        return e.target.value;
      }

      return c;
    });
    const updatedText = updatedColumns.join(' ');

    setColumns(updatedColumns);
    setCurrentText(updatedText);
  };
  
  return (
    <Fragment>
      <ColSwitcher
        colActive={colActive}
        onChange={handleUpdateLayout}
      />
      <Row>
        {columns.map((colText, i) =>
          <Col
            key={i}
            idx={i}
            colText={colText}
            colActive={colActive}
            onColChange={handleColChange}
          />
        )}
      </Row>
    </Fragment>
  );
};

export default LayoutPage;
