import React, { useEffect, useState } from 'react'

const TranslationForm = () => {
    const [originalText, setOriginalText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [translationHistory, setTranslationHistory] = useState([]);

    useEffect(() => {
        // Load previous translations from local storage
        const savedTranslations = localStorage.getItem('translationHistory');

        if (savedTranslations) {
            setTranslationHistory(JSON.parse(savedTranslations));
        }
    }, []);

    useEffect(() => {
        // Save translations to local storage
        localStorage.setItem('translationHistory', JSON.stringify(translationHistory));
    }, [translationHistory]);

    useEffect(() => {
        return () => {
            // Cleanup function to remove translation history from local storage
            localStorage.removeItem('translationHistory');
        };
    }, []);

    const handleTranslate = () => {
        if (originalText.trim() === '') {
            return; // Do not translate empty text
        }

        // Check if the translation already exists in the history
        const translationExists = translationHistory.some(
            (translation) => translation.originalText === originalText
        );

        if (translationExists) {
            return; // Do not add duplicate translations
        }
        // Dummy translation, copy the original text to translated text
        setTranslatedText(originalText);

        // Add the translation to the history
        setTranslationHistory((prevHistory) => [
            { originalText, translatedText: originalText },
            ...prevHistory,
        ]);
    };

    const handleEditTranslation = (index) => {
        const editedTranslation = translationHistory[index];
        setOriginalText(editedTranslation.originalText);
        setTranslatedText(editedTranslation.translatedText);
    };

    return (
        <div className="mx-auto p-4 bg-gray-50">
            <div className="flex flex-col md:flex-row md:items-center md:justify-center mb-4">
                <div className="md:w-1/2 md:mr-4 mb-4 md:mb-0">
                    <h4>Original Text</h4>
                    <textarea
                        className="w-full h-40 p-2 border border-gray-300 rounded"
                        placeholder="Original text"
                        value={originalText}
                        onChange={(e) => setOriginalText(e.target.value)}
                    ></textarea>
                </div>
                <div className="md:w-1/2 md:ml-4">
                    <h4>Easy Language</h4>
                    <textarea
                        className="w-full h-40 p-2 border border-gray-300 rounded"
                        placeholder="Translated text"
                        value={translatedText}
                        readOnly
                    ></textarea>
                </div>
            </div>
            <div className="flex justify-center mb-4">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={handleTranslate}
                >
                    Translate
                </button>
            </div>
            <h2 className="text-lg font-bold my-8 text-center">Translation History</h2>
            <div className="grid grid-cols-3 gap-4">
                {translationHistory.map((translation, index) => (
                    <div
                        key={index}
                        className="mb-2 p-2 border border-gray-300 rounded cursor-pointer"
                        onClick={() => handleEditTranslation(index)}
                    >
                        <div>
                            <strong>Original Text:</strong> {translation.originalText}
                        </div>
                        <div>
                            <strong>Translated Text:</strong> {translation.translatedText}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default TranslationForm