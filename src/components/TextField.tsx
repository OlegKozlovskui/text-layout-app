import React, { ChangeEvent, Fragment } from 'react';

type Props = {
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextField: React.FC<Props> = ({ onChange }) => (
  <Fragment>
    <label htmlFor="text">Enter Layout Text</label>
    <textarea
      id="text"
      className="form-control"
      spellCheck="false"
      onChange={onChange}
    />
  </Fragment>
);

export default TextField;
