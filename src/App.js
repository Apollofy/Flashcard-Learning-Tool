import React, { useEffect, useState } from 'react';
import Flashcard from './FlashCard';
import Header from './Header';
import InternalDashboard from './InternalDashboard';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import supabase from './supabaseClient';

const App = () => {
    const [flashcards, setFlashcards] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch flashcards from Supabase
    const fetchFlashcards = async () => {
        try {
            const { data, error } = await supabase
                .from('flashcards')
                .select('*');

            if (error) throw error;

            console.log('Fetched flashcards:', data); // Debugging log
            setFlashcards(data || []); // Ensure data is an array
        } catch (error) {
            console.error('Error fetching flashcards:', error);
            setFlashcards([]); // Ensure flashcards is always an array
        } finally {
            setLoading(false); // Ensure loading is set to false
        }
    };

    useEffect(() => {
        fetchFlashcards();
    }, []);

    const handleAddCard = async (newCard) => {
        try {
            const { data, error } = await supabase
                .from('flashcards')
                .insert([newCard]);

            if (error) throw error;

            console.log('Added card:', data[0]); // Debugging log
            setFlashcards((prevFlashcards) => [...prevFlashcards, data[0]]);
        } catch (error) {
            console.error('Error adding card:', error);
        }
    };

    const handleEditCard = async (index, updatedCard) => {
        const cardToUpdate = flashcards[index];

        if (!cardToUpdate) {
            console.error('Card not found at index:', index);
            return;
        }

        try {
            const { data, error } = await supabase
                .from('flashcards')
                .update(updatedCard)
                .eq('id', cardToUpdate.id);

            if (error) throw error;

            console.log('Updated card:', data[0]); // Debugging log
            setFlashcards((prevFlashcards) =>
                prevFlashcards.map((card, i) =>
                    i === index ? data[0] : card
                )
            );
        } catch (error) {
            console.error('Error updating card:', error);
        }
    };

    const handleDeleteCard = async (index) => {
        const cardToDelete = flashcards[index];

        if (!cardToDelete) {
            console.error('Card not found at index:', index);
            return;
        }

        try {
            const { error } = await supabase
                .from('flashcards')
                .delete()
                .eq('id', cardToDelete.id);

            if (error) throw error;

            console.log('Deleted card:', cardToDelete); // Debugging log
            setFlashcards((prevFlashcards) =>
                prevFlashcards.filter((_, i) => i !== index)
            );
        } catch (error) {
            console.error('Error deleting card:', error);
        }
    };

    // Add additional logging to track the state of flashcards
    console.log('Current flashcards state:', flashcards);

    return (
        <Router>
            <Header />
            <div className="min-h-screen bg-amber-50 p-6">
                <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
                    <Routes>
                        <Route path="/" element={<Navigate to="/cards" />} />
                        <Route path="/cards" element={
                            <div className="flex flex-col items-center justify-center w-full max-w-md p-4 bg-amber-50 border border-red-600 rounded-md shadow-md">
                                {loading ? (
                                    <p>Loading...</p>
                                ) : flashcards && Array.isArray(flashcards) && flashcards.length > 0 ? (
                                    <Flashcard
                                        flashcards={flashcards}
                                        initialIndex={0}
                                    />
                                ) : (
                                    <p>No flashcards available. Please add some.</p>
                                )}
                            </div>
                        } />
                        <Route path="/dashboard" element={
                            <InternalDashboard
                                flashcards={flashcards}
                                onAddCard={handleAddCard}
                                onEditCard={handleEditCard}
                                onDeleteCard={handleDeleteCard}
                            />
                        } />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
