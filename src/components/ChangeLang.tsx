import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../constants/index';


export const ChangeLang = () => {

    const { i18n, t } = useTranslation()

    const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const lang_code = e.target.value
        i18n.changeLanguage(lang_code)

    }

    return (
        <>
            <select defaultValue={i18n.language} onChange={onChangeLang}  >
                {
                    LANGUAGES.map(({ code, label }) => (
                        <option
                            key={code}
                            value={code}
                        >{label}</option>
                    ))
                }
            </select>
        </>
    )
}