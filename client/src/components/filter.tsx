import React, { useState } from 'react';
import { Autocomplete, TextField, Box, Paper } from '@mui/material';

export interface FilterOption {
  title: string;
  type: 'Job Title' | 'Location' | 'Company';
}

const data: FilterOption[] = [
  { title: 'Software Engineer', type: 'Job Title' },
  { title: 'Product Manager', type: 'Job Title' },
  { title: 'San Francisco', type: 'Location' },
  { title: 'New York', type: 'Location' },
  { title: 'Google', type: 'Company' },
  { title: 'Microsoft', type: 'Company' }
];

interface FilterProps {
  onFilterChange: (selectedValue: FilterOption | null, filterType: string) => void;
}



const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [jobTitle, setJobTitle] = useState<FilterOption | null>(null);
  const [location, setLocation] = useState<FilterOption | null>(null);
  const [companyName, setCompanyName] = useState<FilterOption | null>(null);

const handleChange = (newValue: FilterOption | null, filterType: string) => {
  switch(filterType) {
    case 'Job Title':
      setJobTitle(newValue);
      break;
    case 'Location':
      setLocation(newValue);
      break;
    case 'Company':
      setCompanyName(newValue);
      break;
  }
  onFilterChange(newValue, filterType);
};

  
  return (
    <Paper elevation={2} sx={{ m: 2 }}>
      <Box display="flex" justifyContent="space-between" padding={1.5}>
        <Autocomplete
          options={data.filter(option => option.type === 'Job Title')}
          getOptionLabel={(option) => option.title}
          sx={{ width: 300 }}
          size='small'
          value={jobTitle}
          onChange={(event, newValue) => handleChange(newValue, 'Job Title')}
          renderInput={(params) => <TextField {...params} label="Job Title" variant="outlined" />}
        />
        <Autocomplete
          options={data.filter(option => option.type === 'Location')}
          getOptionLabel={(option) => option.title}
          sx={{ width: 300 }}
          size='small'
          value={location}
          onChange={(event, newValue) => handleChange(newValue, 'Location')}
          renderInput={(params) => <TextField {...params} label="Location" variant="outlined" />}
        />
        <Autocomplete
          options={data.filter(option => option.type === 'Company')}
          getOptionLabel={(option) => option.title}
          sx={{ width: 300 }}
          size='small'
          value={companyName}
          onChange={(event, newValue) => handleChange(newValue, 'Company')}
          renderInput={(params) => <TextField {...params} label="Company" variant="outlined" />}
        />
      </Box>
    </Paper>
  );
};

export default Filter;

