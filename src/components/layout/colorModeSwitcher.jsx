import React from 'react';
import {  Button, useColorMode } from "@chakra-ui/react";


const colorModeSwitcher = ({ children }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <header>
            <Button onClick={toggleColorMode}>
                Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>
        </header>
    )
}

export default colorModeSwitcher;