import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { NoteCard } from './components/NoteCard';
import { ReviewPage } from './pages/ReviewPage';
import { ContributorProfile } from './pages/ContributorProfile';
import { SAMPLE_NOTES } from './data/sampleData';

function HomePage() {
  const handlePreview = (id: number) => {
    console.log(`Preview note ${id}`);
  };

  const handlePurchase = (id: number) => {
    console.log(`Purchase note ${id}`);
  };

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Featured Notes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SAMPLE_NOTES.map((note) => (
          <NoteCard
            key={note.id}
            {...note}
            onPreview={() => handlePreview(note.id)}
            onPurchase={() => handlePurchase(note.id)}
          />
        ))}
      </div>
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/review/:id" element={<ReviewPage />} />
          <Route path="/contributor/:id" element={<ContributorProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;