import React from "react";
import {Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";
import "./Projects.css";

interface ProjectProp {
    name: string,
    description: string,
    image: string,
}

const Project: React.FC<{ project: ProjectProp }> = ({project}) => {
    return (
        <Grid item xs={1}>
            <Card color="secondary">
                <CardActionArea>
                    <CardContent className="projectCards">
                        <CardMedia
                            component="img"
                            sx={{width: 125}}
                            image={project.image}
                            alt="Project Image"
                        />
                        <Box>
                            <Typography variant="h5">{project.name}</Typography>
                            <Typography variant="body2" color="text.secondary">{project.description}</Typography>
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
            </Grid>
        </Container>
    )
};

export default Projects;