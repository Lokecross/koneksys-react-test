import GlobalStyles from 'styles/global';

import Home from 'pages/Home';

import { store } from 'store/app';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Home />
    </Provider>
  );
};

export default App;
