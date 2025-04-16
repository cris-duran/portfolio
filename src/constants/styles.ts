import { SxProps } from "@mui/material";

export const styles: { [key: string]: React.CSSProperties | SxProps } = {
    mainContainer: {
        display: 'grid',
        minHeight: '100dvh',
        gridTemplateRows: 'auto 1fr auto',
        margin: '0',
        padding: '0',
        boxSizing: 'border-box',
    },
    appBar: {
        backgroundColor: 'rgb(29, 23, 39)',
        boxShadow: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: '1px solid #e0e0e0',
    },
    tabs: {
        '& .MuiTabs-indicator': {
            backgroundColor: 'turquoise.light'
        },
        '& .MuiTab-root': {
            color: 'white.light',
            '&.Mui-selected': {
                color: 'turquoise.light'
            }
        }
    }
};