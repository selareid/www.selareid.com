import {Container, Grid} from "@mui/material";
import "./Projects.css";
import Project from "../components/Project";

const Projects: React.FC = () => {
    return (
        <Container fixed className="contentContainer">
            <Grid container rowSpacing={1} columns={1}
                  sx={{
                      m: "15px 0 25px",
                      p: "7px 15px 15px",
                      bgcolor: "secondary.dark",
                  }} >
            </Grid>
        </Container>
    )
};

export default Projects;