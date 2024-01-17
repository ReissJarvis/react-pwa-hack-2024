import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function HomePage() {

    return (
        <Box sx={{padding:"0px 10px"}}>
            <Typography variant="h2" gutterBottom>
                Welcome
            </Typography>

            <Typography variant="body1" sx={{marginBottom: "20px"}}>
                The Todo app has been created to show off what a PWA looks like on mobile and desktop when deployed as a part of the Brum & MK Bench Hackathon
            </Typography>

            <Typography variant="body1" gutterBottom>
                Click <Link to="/todo">HERE</Link> to navigate to the todo's or find the page on the menu
            </Typography>
        </Box>
    ) 
}