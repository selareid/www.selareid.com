import React from "react";
import {Button, Container, createTheme, Theme, ThemeProvider, Typography} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

const AboutMe: React.FC = () => {
    const headerTheme = {
        fontFamily: "Georgia serif",
        fontWeight: 600,
    };

    return (
        <Container fixed className="contentContainer">
            <ThemeProvider theme={(theme: Theme) => createTheme({
                ...theme,
                typography: {
                    fontSize: 7,
                    h1: headerTheme, h2: headerTheme, h3: headerTheme, h4: headerTheme, h5: headerTheme,
                    body1: {
                        fontSize: 17,
                        fontFamily: "'JetBrains Mono', Georgia serif",
                        textIndent: "-0.5em",
                        marginInlineStart: "0.5em"
                    },
                    button: {
                        ...theme.typography.button
                    }
                }
            })}>

                <Typography variant={"h1"} sx={{mt: "0.5em"}}>Daniel Reid</Typography>
                <Typography variant={"h4"} sx={{mb: "1.5em"}}>Curious about the world and how things work</Typography>

                <Typography>
                    I'm a student at the University of Auckland. <br/>
                    Majoring in Mathematics and Computer Science.
                </Typography>
                <Typography sx={{mt: "0.5em"}}>
                    Current Interests: Mathematics - with a focus on modelling
                </Typography>
                <Typography>
                    Experience With: Rust, JS/TX, HTML/CSS, Python, Java, React, MUI, Ionic
                </Typography>

                <Button variant="text" color="secondary"
                        startIcon={<GitHubIcon/>} href="https://github.com/selareid/"
                        sx={{mt: "1em"}}>GitHub</Button>
            </ThemeProvider>
        </Container>
    )
};

export default AboutMe;
