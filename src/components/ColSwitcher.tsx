import React from 'react';

type Props = {
  colActive: number;
  onChange: (colActive: number) => void;
};

const ColSwitcher: React.FC<Props> = ({ colActive, onChange }) => (
  <div className="col-switcher">
    <button
      type="button"
      className={`btn btn-success ${colActive === 1 ? 'active' : ''}`}
      onClick={() => onChange(1)}
    >
      Single Column
    </button>
    <button
      type="button"
      className={`btn btn-warning ${colActive === 2 ? 'active' : ''}`}
      onClick={() => onChange(2)}
    >
      2 Columns
    </button>
    <button
      type="button"
      className={`btn btn-danger ${colActive === 3 ? 'active' : ''}`}
      onClick={() => onChange(3)}
    >
      3 Columns
    </button>
  </div>
);

export default ColSwitcher;
