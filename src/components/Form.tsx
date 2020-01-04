import React, { useState, useContext, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';

import TextField from './TextField';
import TextContext, { ITextContext } from '../context/TextContext';

const Form: React.FC = () => {
  const [text, setText] = useState<string>('');
  const { setCurrentText } = useContext<ITextContext>(TextContext);
  const history = useHistory();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCurrentText(text);
    history.push('/layout');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <TextField onChange={handleChange} />
      <button
        className="btn btn-primary btn-lg btn-submit"
        type="submit"
        disabled={!text}
      >
        LAYOUT
      </button>
    </form>
  );
};

export default Form;
