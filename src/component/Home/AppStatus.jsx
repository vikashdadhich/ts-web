import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import * as React from 'react';

import AppTable from './AppTable';



export default function AppStatus() {

  const [env, setEnv] = React.useState('');

  const handleChange = (event) => {
    setEnv(event.target.value);
  };

  return (

    <Grid conatiner>
      <Grid item xs={6} sm={6} md={8} xl={6} lg={6}>
        <FormControl variant="standard" sx={{ m: 1, width: 200 }}>
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
      </Grid>
      <Grid item xs={10}>
        <AppTable />
      </Grid>

    </Grid>



  );
}
