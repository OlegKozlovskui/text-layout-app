import React, { useCallback, useState } from 'react';

import { ITextContext } from '../context/TextContext';

export const useText = (): ITextContext => {
  const [text, setText] = useState('');

  const setCurrentText = useCallback((currentText: string): void => {
    setText(currentText);
  }, []);

  return {
    text,
    setCurrentText
  }
};
