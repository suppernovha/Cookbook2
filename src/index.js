import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SearchProvider } from './utils/context';

import Home from './pages/Home';
import List from './pages/List';
import SearchError from './pages/SearchError'
import EditRecipe from './pages/EditRecipe';

import Header from './components/Header';
import Recipe from './pages/Recipe';

import GlobalStyle from './utils/style/GlobalStyle';
import Background from './components/Background';

import { createRoot } from 'react-dom/client';
const domNode = document.getElementById('root');
const root = createRoot(domNode);


// remettre  <Background /> après GlobalStyle
root.render(
  <React.StrictMode>
    <Router>
      <SearchProvider>
        <Header />
        <GlobalStyle />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/List/type/:type" element={<List />} />
          <Route path="/List/id/:id" element={<List />} />
          <Route path="/Recipe/:currentId" element={<Recipe />} />
          <Route path="/SearchError" element={<SearchError />} />
          <Route path="/EditRecipe" element={<EditRecipe />} />
        </Routes>
      </SearchProvider>
    </Router>
  </React.StrictMode>
);
