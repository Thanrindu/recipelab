import Page from './pages/Page'
import Category from './components/Category';
import Search from './components/Search';
import HeroHeader from './components/HeroHeader';
import { BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeroHeader />
        {/* <Category /> */}
        <Page />
      </BrowserRouter>
    </div>
  );
}

export default App;
