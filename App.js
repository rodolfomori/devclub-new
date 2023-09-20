import AppProvider from './src/hooks';

import MyApp from './src/containers/Home';

export default function App() {
  return <AppProvider><MyApp /></AppProvider>;
}