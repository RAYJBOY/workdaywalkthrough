import { AppBar, Toolbar, Typography, Stack, Button, Divider } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';
import LoginModal from './Login';

export interface link {
    displayName: string;
    link: string;
}

interface NavBarProps {
    links: link[];
    userIsLoggedIn: boolean | null;
    setUserIsLoggedIn: React.Dispatch<React.SetStateAction<boolean | null>>
}

export const NavBar:React.FC<NavBarProps> = ({links, userIsLoggedIn, setUserIsLoggedIn}) => {

    const [isModalOpen, setModalOpen] = useState(false);

    const handleModalClose = () => {
      setModalOpen(false);
    };
  
    const handleModalOpen = () => {
      setModalOpen(true);
    };

    const handleLogOut = () => {
        setUserIsLoggedIn(false);
    }

    return (
        <>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h5' component='div' sx={{flexGrow: 1}} align='left'>WorkdayWalkthrough</Typography>
                    <Stack direction='row' divider={<Divider orientation="vertical" flexItem/>} spacing={3}>
                        {links.map((item, index) => (
                            <Button key={index} color='inherit' href={item.link}>
                                {item.displayName}
                            </Button>
                        ))}
                        {!userIsLoggedIn && <Button startIcon={<PersonIcon/>} color='inherit' onClick={handleModalOpen}>Sign in/up</Button>}
                        {userIsLoggedIn && <Button startIcon={<LogoutIcon/>} color='inherit' onClick={handleLogOut}>Sign out</Button>}
                    </Stack>
                </Toolbar>
            </AppBar>
            <LoginModal open={isModalOpen} handleClose={handleModalClose} />
        </>
    )
}