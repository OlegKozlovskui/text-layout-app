import React from 'react'

export interface ITextContext {
  text: string;
  setCurrentText: (text: string) => void;
}

const TEXT_DEFAULT_VALUE = {
  text: '',
  setCurrentText: () => {}
};

const TextContext = React.createContext<ITextContext>(TEXT_DEFAULT_VALUE);

export const TextProvider = TextContext.Provider;

export default TextContext;
