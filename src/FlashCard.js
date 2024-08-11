import React, { useState } from 'react';

const Flashcard = ({ flashcards, initialIndex }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
        setIsFlipped(false);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
        setIsFlipped(false);
    };

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const { question, answer } = flashcards[currentIndex];

    return (
        <div className="flex flex-col items-center mx-auto max-w-md p-4">
            <div className="relative w-full h-[300px] perspective" style={{ perspective: '1000px' }}>
                <div 
                    className={`relative w-full h-full duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
                    onClick={handleFlip}
                >
                    {/* Front Side */}
                    <div 
                        className={`absolute w-full h-full bg-red-600 text-white rounded-md flex items-center justify-center p-8 backface-hidden`}
                        style={{ boxShadow: '0 10px 15px rgba(255,0,0,0.2)' }}
                    >
                        <h3 className="text-xl font-bold text-white text-center">{question}</h3>
                    </div>
                    
                    {/* Back Side */}
                    <div 
                        className={`absolute w-full h-full bg-amber-100 text-gray-900 rounded-md flex items-center justify-center p-8 backface-hidden transform rotate-y-180`}
                        style={{ boxShadow: '0 10px 20px rgba(255,0,0,0.2)' }}
                    >
                        <p className="text-xl font-bold text-red-600 text-center">{answer}</p>
                    </div>
                </div>
            </div>
            <div className="flex space-x-40 mt-3">
                <button
                    onClick={handlePrevious}
                    className="px-6 py-3 bg-amber-50 text-red-600 font-bold border rounded-md shadow-md hover:bg-gray-900 focus:outline-none"
                >
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    className="px-6 py-3 bg-amber-50 text-red-600 font-bold border  rounded-md shadow-md hover:bg-gray-900 focus:outline-none"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Flashcard;
