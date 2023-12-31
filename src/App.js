import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/HomePage/Home';
import JobsPage from './Components/JobsPage/JobsPage';
import CompaniesPage from './Components/CompaniesPage/CompaniesPage';
import BlogPage from './Components/BlogPage/BlogPage';
import AboutPage from './Components/AboutPage/AboutPage';
import ContactPage from './Components/ContactPage/ContactPage';
import Footer from './Components/Footer/Footer';
import JobDetail from './Components/JobsPage/JobDetailPage/JobDetail';
import CompanyDetail from './Components/CompaniesPage/CompanyDetail/CompanyDetail';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5000/api-graph',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/company" element={<CompaniesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/job/:jobId" element={<JobDetail />} />
          <Route path="/company/:companyId" element={<CompanyDetail />} />
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
};

export default App;
