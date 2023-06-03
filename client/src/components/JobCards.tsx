import { Avatar, Card, Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";

const JobCards = () => {
  return (
    <Card raised sx={{maxWidth: 300, padding: "10px"}}>
        <Stack spacing={1}>
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                <Avatar alt="Microsoft logo" src="../../public/microsoft.jpg"/>
                <Typography variant="h5" gutterBottom>
                    Microsoft
                </Typography>
            </Stack>
            <Divider variant="middle"/>
            <Typography variant="body1" component="div" color="text.secondary">
                Title: Software Engineer
            </Typography>
            <Typography variant="body1" component="div" color="text.secondary">
                Pay range: £30k - £50k
            </Typography>
            <Typography variant="body1" component="div" color="text.secondary">
                Technologies: React, TypeScript, Python
            </Typography>
            <Typography variant="body1" component="div" color="text.secondary">
                Location: Manchester
            </Typography>
        </Stack>
    </Card>
  )
};

export default JobCards;
