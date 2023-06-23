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

    const handleTranslate = () => {
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
        <div className="container mx-auto p-4">
            <div className="mb-4">
                <textarea
                    className="w-full h-40 p-2 border border-gray-300 rounded"
                    placeholder="Original text"
                    value={originalText}
                    onChange={(e) => setOriginalText(e.target.value)}
                ></textarea>
            </div>
            <div className="mb-4">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={handleTranslate}
                >
                    Translate
                </button>
            </div>
            <div className="mb-4">
                <textarea
                    className="w-full h-40 p-2 border border-gray-300 rounded"
                    placeholder="Translated text"
                    value={translatedText}
                    readOnly
                ></textarea>
            </div>
            <div>
                <h2 className="text-lg font-bold mb-2">Translation History</h2>
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