import React from 'react';
import { Story, Meta } from '@storybook/react';
import {Grid} from "./grid";
import {Ruler} from "../ruler/ruler";
import {Box} from "../box/box";

export default {
    title: 'grid',
    component: Grid
} as Meta;

export const Basic: Story = (args) => (
    <div style={{position:'relative'}}>
        <Grid container spacing={'sm'} alignItems={'center'} style={{height:'100%'}} {...args}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Box>
                    box 1
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Box>
                    box 2
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Box>
                    box 3
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Box>
                    box 4
                </Box>
            </Grid>
        </Grid>
    </div>
);

export const WithRuler: Story = (args) => (
    <div style={{position:'relative'}}>
        <Ruler spacing={'sm'}/>
        <Grid container spacing={'sm'} alignItems={'center'} style={{height:'100%'}} {...args}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Box>
                    box 1
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Box>
                    box 2
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Box>
                    box 3
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Box>
                    box 4
                </Box>
            </Grid>
        </Grid>
    </div>
);

export const Interactive: Story = (args) => (
    <div style={{position:'relative',height:'100vh'}}>
        <Grid container spacing={'sm'} alignItems={'center'} style={{height:'100%'}} {...args}>
            <Grid item xs={1}>
                <Box>
                    box 1
                </Box>
            </Grid>
            <Grid item xs={1}>
                <Box>
                    box 2
                </Box>
            </Grid>
            <Grid item xs={1}>
                <Box>
                    box 3
                </Box>
            </Grid>
            <Grid item xs={1}>
                <Box>
                    box 4
                </Box>
            </Grid>
        </Grid>
    </div>
);