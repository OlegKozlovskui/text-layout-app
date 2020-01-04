import React, { useContext } from 'react';

import TextContext from '../context/TextContext';

const LayoutPage: React.FC = () => {
  const { text } = useContext(TextContext);
  return (
    <div>
      Layout Page
      <strong>{text}</strong>
    </div>
  );
};

export default LayoutPage;
