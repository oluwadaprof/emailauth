import './App.css';
import Layout from './components/layout/layout';
import {
    ThemeProvider,
    theme,
    ColorModeProvider,
    CSSReset,
} from "@chakra-ui/react";
// import { ColorModeScript } from '@chakra-ui/react'


function App() {
    return (<div className="App" >
        <ThemeProvider theme={theme} >
            <ColorModeProvider >
                <CSSReset />
                <Layout />
            </ColorModeProvider>
        </ThemeProvider>
    </div>
    );
}

export default App;