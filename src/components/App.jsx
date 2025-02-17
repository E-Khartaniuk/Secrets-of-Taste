import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import SharedLayout from './SharedLayout/SharedLayout';
import FullRecipe from './pages/FullRecipe/FullRecipe';
import Contacts from './pages/Contacts/Contacts';
import SearchPage from './pages/SearchPage/SearchPage';
import DietPage from './pages/DIetPage/DietPage';
import FavoriteDishes from './pages/FavoriteDishes/FavoriteDishes';
import APIError from './pages/APIError/APIError';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="/recipe/:id" element={<FullRecipe />} />
        <Route path="search/:query" element={<SearchPage />} />
        <Route path="diet/:query" element={<DietPage />} />
        <Route path="favorites" element={<FavoriteDishes />} />
        <Route path="apierror" element={<APIError />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
