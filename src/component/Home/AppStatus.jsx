import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import * as React from 'react';

import AppTable from './AppTable';



export default function AppStatus() {

  const [env, setEnv] = React.useState('');

  const handleChange = (event) => {
    setEnv(event.target.value);
  };

  return (
    <div>
<h2>Application status</h2>
<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Environment</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={env}
    label="Environment"
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
<AppTable/>
    </div>
    
 
  );
}
