import { FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, TextField, Typography, Button } from "@mui/material";

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
            <Typography variant="h3">Register New Job</Typography>
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

        <div style={{'gridRowStart': 5}}>
            <Button variant="contained" size="large" style={{'margin': '5px'}}>
                Upload Video
            </Button>  

            <Button variant="contained" size="large">
                Submit
            </Button>  
        </div>
              
    </div>
  )
};

