import React from 'react';

import Form from './Form';

const FormPage: React.FC = () => (
  <div className="jumbotron">
    <h1 className="display-3">Hello, world!</h1>
    <p className="lead">This is a simple text layout app!!!</p>
    <hr className="my-4" />
    <Form />
  </div>
);

export default FormPage;
