import { AppBar, Box, Button, Container, styled, Toolbar } from "@mui/material"
import { useNavigate } from "react-router-dom"


const DropBtn  = styled('button')`
background-color: blue;
padding: 16px;
font-size: 16px;
border: none;
`

export const Navbar = () => {
    const navigate = useNavigate()
    return (
        <AppBar position="static">
            <Container maxWidth="xl">

                <Toolbar disableGutters>
                    <Box sx={{flexGrow: 2, display: 'flex'}}>
                    <Button
                            onClick={() => navigate('/todo')}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            ToDo
                        </Button>
                        <Button
                            onClick={() => navigate('/users')}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                           Users
                        </Button>
                        <DropBtn
                          onClick={() => navigate('/categories')}
                          sx={{my: 2, color: 'white', display: 'block'}}
                        >
                        Categories 
                        </DropBtn>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};    