import React from 'react';
import SafeArea from './src/components/safeArea';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/store/reducers/rootReducer';
import RootNavigation from './src/navigation/rootNavigation';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <SafeArea>
        <RootNavigation />
      </SafeArea>
    </Provider>
  );
};

export default App;
