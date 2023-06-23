import TranslationHistory from './TranslationHistory/TranslationHistory'
import Navbar from './components/Navbar/Navbar'
import TranslationForm from './components/Navbar/TranslationForm/TranslationForm'

function App () {

  return (
    <div>
      <Navbar />
      <TranslationForm />
      <TranslationHistory />
    </div>
  )
}

export default App
