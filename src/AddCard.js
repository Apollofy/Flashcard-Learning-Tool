import React, { useState } from 'react';

const AddCard = ({ onAddCard }) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (question && answer) {
            onAddCard({ question, answer });
            setQuestion('');
            setAnswer('');
        }
    };

    return (
        <div className="bg-white border border-red-600 rounded-md shadow-lg p-6">
            <h2 className="text-xl font-bold text-red-600 mb-4">Add New Flashcard</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="question" className="block text-gray-700 font-medium">Question</label>
                    <input
                        id="question"
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter the question"
                    />
                </div>
                <div>
                    <label htmlFor="answer" className="block text-gray-700 font-medium">Answer</label>
                    <input
                        id="answer"
                        type="text"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter the answer"
                    />
                </div>
                <button
                    type="submit"
                    className="px-6 py-3 bg-red-600 text-white font-bold border border-red-600 rounded-md shadow-md hover:bg-red-700 focus:outline-none"
                >
                    Add Card
                </button>
            </form>
        </div>
    );
};

export default AddCard;
