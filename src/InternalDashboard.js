import React from 'react';
import AddCard from './AddCard';

const InternalDashboard = ({ flashcards, onAddCard, onEditCard, onDeleteCard }) => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-red-600 mb-6">Internal Dashboard</h1>
            <AddCard onAddCard={onAddCard} />
            <div className="mt-8">
                <h2 className="text-xl font-bold text-red-600 mb-4">Flashcards</h2>
                {flashcards.length === 0 ? (
                    <p>No flashcards available. Please add some.</p>
                ) : (
                    <div className="grid grid-cols-1 gap-6">
                        {flashcards.map((card, index) => (
                            <div key={index} className="bg-white border border-red-600 rounded-md shadow-md p-4">
                                <h3 className="text-lg font-bold text-red-600">{card.question}</h3>
                                <p className="text-gray-700 mt-2">{card.answer}</p>
                                <div className="mt-4 flex space-x-2">
                                    <button
                                        onClick={() => {
                                            const newQuestion = prompt('Edit Question:', card.question);
                                            const newAnswer = prompt('Edit Answer:', card.answer);
                                            if (newQuestion && newAnswer) {
                                                onEditCard(index, { question: newQuestion, answer: newAnswer });
                                            }
                                        }}
                                        className="px-4 py-2 bg-blue-500 text-white font-bold border border-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => onDeleteCard(index)}
                                        className="px-4 py-2 bg-red-500 text-white font-bold border border-red-500 rounded-md shadow-md hover:bg-red-600 focus:outline-none"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default InternalDashboard;
