// flashcardService.js
import supabase from './supabaseClient';

// Fetch flashcards
export const fetchFlashcards = async () => {
  const { data, error } = await supabase
    .from('flashcards')
    .select('*');
  if (error) {
    console.error(error);
  }
  return data;
};

// Add a flashcard
export const addFlashcard = async (question, answer) => {
  const { data, error } = await supabase
    .from('flashcards')
    .insert([{ question, answer }]);
  if (error) {
    console.error(error);
  }
  return data;
};

// Update a flashcard
export const updateFlashcard = async (id, question, answer) => {
  const { data, error } = await supabase
    .from('flashcards')
    .update({ question, answer })
    .eq('id', id);
  if (error) {
    console.error(error);
  }
  return data;
};

// Delete a flashcard
export const deleteFlashcard = async (id) => {
  const { data, error } = await supabase
    .from('flashcards')
    .delete()
    .eq('id', id);
  if (error) {
    console.error(error);
  }
  return data;
};
