import { AppBar, Toolbar, Typography, Stack, Button, Divider } from '@mui/material'

export interface link {
    displayName: string;
    link: string;
}

interface NavBarProps {
    links: link[];
}

export const NavBar:React.FC<NavBarProps> = ({links}) => {

    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h5' component='div' sx={{flexGrow: 1}} align='left'>WorkdayWalkthrough</Typography>
                <Stack direction='row' divider={<Divider orientation="vertical" flexItem/>} spacing={3}>
                    {links.map((item, index) => (
                        <Button key={index} color='inherit' href={item.link}>
                            {item.displayName}
                        </Button>
                    ))}
                </Stack>
            </Toolbar>
        </AppBar>
    )

}