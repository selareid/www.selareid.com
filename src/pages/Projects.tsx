import React from "react";
import {Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";
import "./Projects.css";

const Projects: React.FC = () => {
    const c =(
    <Grid item xs={1}>
        <Card color="secondary">
            <CardActionArea sx={{display: "flex", alignItems: "flex-start"}}>
                <CardMedia
                    component="img"
                    sx={{width: 125}}
                    image="https://birddwnload.weebly.com/uploads/1/2/4/8/124814239/528431018.jpg"
                    alt="Project Image"
                />
                <CardContent sx={{m: 2, p: 0}}>
                    <Typography gutterBottom variant="h4">
                        Project Name
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Grid>);


    return (
        <Container fixed className="contentContainer">
            <Grid container spacing={1} columns={1}>
                {[c, c, c, c]}
            </Grid>
        </Container>
    )
};

export default Projects;