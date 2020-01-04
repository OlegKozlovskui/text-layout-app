import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import FormPage from './components/FormPage';
import LayoutPage from './components/LayoutPage';
import { TextProvider } from './context/TextContext';
import { useText } from './hooks/useText';

const App: React.FC = () => {
  const text = useText();

  return (
    <TextProvider value={text}>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <FormPage />
            </Route>
            <Route path="/layout">
              <LayoutPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </TextProvider>
  );
};

export default App;
