import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import SharedLayout from './SharedLayout/SharedLayout';
import FullRecipe from './pages/FullRecipe/FullRecipe';
import Contacts from './pages/Contacts/Contacts';
import SearchPage from './pages/SearchPage/SearchPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="/recipe/:id" element={<FullRecipe />} />
        <Route path="search/:query" element={<SearchPage />} />

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
