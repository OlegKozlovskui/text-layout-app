import React, { ChangeEvent } from 'react';

type Props = {
  text: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const ColEdit: React.FC<Props> = ({ text, onChange }) => (
  <textarea
    className="form-control"
    spellCheck="false"
    onChange={onChange}
    value={text}
  />
);

export default ColEdit;
