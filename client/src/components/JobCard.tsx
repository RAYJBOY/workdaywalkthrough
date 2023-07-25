import { Avatar, Card, Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export type JobCardType = {
    company: string,
    title: string,
    payMin: number,
    payMax: number,
    location: string,
    id: number
}

interface JobCardsProps {
    company: string,
    title: string,
    payMin: number,
    payMax: number,
    location: string,
}

const JobCard = ({company, title, payMin, payMax, location}: JobCardsProps) => {
  return (
    <Card raised sx={{maxWidth: "400px", padding: "10px"}} component="div">
        <Stack spacing={1}>
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                <Avatar alt="Microsoft logo" src="../../public/microsoft.jpg"/>
                <Typography variant="h5" gutterBottom>
                    {company}
                </Typography>
            </Stack>
            <Divider variant="middle"/>
            <Typography variant="body1" component="div" color="text.secondary">
                Title: {title}
            </Typography>
            <Typography variant="body1" component="div" color="text.secondary">
                Pay range: £{payMin}k - £{payMax}k
            </Typography>
            <Typography variant="body1" component="div" color="text.secondary">
                Technologies: React, TypeScript, Python
            </Typography>
            <Typography variant="body1" component="div" color="text.secondary">
                Location: {location}
            </Typography>
        </Stack>
    </Card>
  )
};

export default JobCard;
