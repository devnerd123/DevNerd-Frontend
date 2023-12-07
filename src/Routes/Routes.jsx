import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import JobDetail from "../Components/JobsPage/JobDetailPage/JobDetail";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/job/:jobId" element={<JobDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
