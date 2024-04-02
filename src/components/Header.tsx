import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ChangeLang } from './ChangeLang';
import { useTranslation } from 'react-i18next';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useState } from 'react';
import MainMenu from './MainMenu';


export default function ButtonAppBar({ toggleColorModeChange }) {
    const [toggleDarkMode, setToggleDarkMode] = useState(true);

    const { t } = useTranslation();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>

                    <MainMenu />


                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {t("title")}
                    </Typography>
                    <ChangeLang></ChangeLang>


                    <IconButton sx={{ ml: 1 }}
                        onClick={() => {
                            setToggleDarkMode(!toggleDarkMode);
                            toggleColorModeChange();
                        }}
                        color="inherit">
                        {toggleDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>


                </Toolbar>
            </AppBar>
        </Box>
    );
}