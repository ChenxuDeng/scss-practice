import React from 'react';
import logo from './logo.svg';
import {Box} from "./component/box/box";
import {Grid} from "./component/grid/grid";
import {Ruler} from "./component/ruler/ruler";

function App() {
  return (
    <div className="App" style={{margin:'16px',position:'relative',height:'100vh'}}>
        <Ruler spacing={'sm'}/>
        <Grid container spacing={'sm'} style={{height:'100%'}} justifyContent={'center'}>
            <Grid item xs={1} sm={6} md={4} lg={3}>
                <Box>
                    box 1
                </Box>
            </Grid>
            <Grid item xs={1} sm={6} md={4} lg={3}>
                <Box>
                    box 2
                </Box>
            </Grid>
            <Grid item xs={1} sm={6} md={4} lg={3}>
                <Box>
                    box 3
                </Box>
            </Grid>
            <Grid item xs={1} sm={6} md={4} lg={3}>
                <Box>
                    box 4
                </Box>
            </Grid>
        </Grid>
    </div>
  );
}

export default App;
