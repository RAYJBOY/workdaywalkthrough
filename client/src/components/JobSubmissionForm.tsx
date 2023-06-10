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
    <div style={{'marginTop':'10px', 'display':'grid', 'backgroundColor': 'grey'}}>

        <div style={{'display': 'flex', 'justifyContent':'center'}}>
            <Typography variant="h3">Job Details</Typography>
        </div>

        <div style={{'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'space-evenly', 'backgroundColor':'green'}}>
            <TextField 
                required 
                id='outline-required' 
                label='Job Title'
                placeholder="Enter job title"
                margin="normal"
                style={{'width':'20%'}}
            />

            <TextField 
                required 
                id='outline-required' 
                label='Job type'
                placeholder="Select job type"
                margin="normal"
                select
                style={{'width':'20%'}}
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
                style={{'width':'20%'}}
            />

            <TextField 
                required 
                id='outline-required' 
                label='Annual Salary'
                placeholder="Enter salary"
                margin="normal"
                style={{'width':'20%'}}
            />
        </div>

        <div>
        <FormControl>
                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                <OutlinedInput
                    startAdornment={<InputAdornment position="start">£</InputAdornment>}
                    label="Amount"
                />
            </FormControl>
        </div>

        
    </div>
  )
};

