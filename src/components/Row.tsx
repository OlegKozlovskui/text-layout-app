import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Row: React.FC<Props> = ({ children }) => (
  <div className="row">
    {children}
  </div>
);

export default Row;
