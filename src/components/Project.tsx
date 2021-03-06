import React, {useState} from "react";
import {Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Modal, Typography} from "@mui/material";

export interface ProjectProp {
    name: string,
    description: string,
    image: string,
    expandedDesc?: JSX.Element
}

const Project: React.FC<{ project: ProjectProp }> = ({project}) => {
    const [open, setOpen] = useState(false);

    const card = <Card color="secondary">
        <CardActionArea onClick={() => setOpen(true)} disableRipple={open}>
            <CardContent className="projectCards">
                <CardMedia
                    component="img"
                    image={project.image}
                    alt="Project Image"
                />
                <Box>
                    <Typography variant="h5">{project.name}</Typography>
                    <div>
                        {open && project.expandedDesc !== undefined ? project.expandedDesc : <Typography variant="body2" color="text.secondary">{project.description}</Typography>}
                    </div>
                </Box>
            </CardContent>
        </CardActionArea>
    </Card>;

    return (
        <Grid item xs={1}>
            <div className="NonModalWrapper">
                {card}
            </div>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description" >
                <Container className="ProjectModalContainer">
                    <Box className="ProjectModalBox">
                        {card}
                    </Box>
                </Container>
            </Modal>
        </Grid>
    );
}

export default Project;