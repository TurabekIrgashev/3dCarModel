import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
// import 1 from './car/1.jpg';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { Typography } from '@mui/material';
import Image from 'mui-image';

export default function ContinuousSlider() {
    const [value, setValue] = React.useState(0);
    const [number, setNumber] = React.useState(1);

    const handleChange = (event, newValue) => {
        let newData = (newValue * (36 / 101)).toFixed(0)
        if (newData == 0) {
            newData = 1;
        }
        setNumber(newData);
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ mt: 5, }} >
                <Typography>360 car image view</Typography>
                <img src={require(`./car/${number}.jpg`)} width="600" height='400' />
                <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                    {/* <VolumeDown /> */}
                    <Slider aria-label="Volume" value={value} onChange={handleChange} />
                    {/* <VolumeUp /> */}
                </Stack>
            </Box>
        </>

    );
}
