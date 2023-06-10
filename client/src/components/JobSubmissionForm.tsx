import { FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, TextField, Typography } from "@mui/material";
import React from "react"

const jobTypes = [
    {
        value: 'Remote',
        label: 'remote',
    },
    {
        value: 'Hybrid',
        label: 'hybrid',
    },
    {
        value: 'In Person',
        label: 'In Person',
    },

]


export const JobSubmissionForm = () => {
  return (
    <div style={{'marginTop':'10px', 
                 'display':'grid', 
                 'gridTemplateColumns': '1fr 1fr 1fr',
                 'gap': '5%'
                }}>

        <div style={{'display': 'flex', 
                     'justifyContent':'center', 
                     'gridColumn': 'span 3'
                    }}>
            <Typography variant="h3">Job Details</Typography>
        </div>

        <TextField 
            required 
            id='outline-required' 
            label='Job Title'
            placeholder="Enter job title"
            margin="normal"
        />

        <TextField 
            required 
            id='outline-required' 
            label='Job type'
            placeholder="Select job type"
            margin="normal"
            select
        >
            {jobTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.value}
                </MenuItem>
            ))}
        </TextField>

        <TextField 
            required 
            id='outline-required' 
            label='Location'
            placeholder="Enter location"
            margin="normal"
        />

        <TextField 
            required 
            label='Description'
            placeholder="Job Description"
            margin="normal"
            multiline
            style={{'gridColumn': 'span 3'}}
        />

        <FormControl margin="normal">
            <InputLabel>Amount</InputLabel>
            <OutlinedInput
                startAdornment={<InputAdornment position="start">£</InputAdornment>}
                label="Amount"
            />
        </FormControl>        
    </div>
  )
};

