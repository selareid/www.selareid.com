import React from "react";
import {Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";
import "./Projects.css";

const Project: React.FC = () => {
    return (
        <Grid item xs={1}>
            <Card color="secondary">
                <CardActionArea>
                    <CardContent className="projectCards">
                        <CardMedia
                            component="img"
                            sx={{width: 125}}
                            image="https://birddwnload.weebly.com/uploads/1/2/4/8/124814239/528431018.jpg"
                            alt="Project Image"
                        />
                        <Box>
                            <Typography variant="h5">
                                Project Name
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}


const Projects: React.FC = () => {
    return (
        <Container fixed className="contentContainer">
            <Grid container spacing={1} columns={1}>
                {[<Project/>,<Project/>,<Project/>,<Project/>,<Project/>,<Project/>,<Project/>]}
            </Grid>
        </Container>
    )
};

export default Projects;