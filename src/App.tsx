import './App.css'
import Demo from './components/Demo'
import ExampleGrid from './components/ExampleGrid'
import { ChangeLang } from './components/ChangeLang'
import  {useTranslation} from 'react-i18next';


function App() {

  const {t} = useTranslation();

  return (
    <>
         <Demo />
         <ExampleGrid />
         <ChangeLang />
      <div>
      <h1>{t("title")}</h1>
       
      </div>
 
    </>
  )
}

export default App
