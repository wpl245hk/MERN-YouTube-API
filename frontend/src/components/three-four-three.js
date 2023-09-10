import React, {useState} from 'react';
import Grid from '@react-css/grid';
import Player from './player.js';


export default function ThreeFourThree (props)  {

    return (
    <Grid columns='auto auto auto auto auto auto auto' columnGap='10px'>
        <Grid.Item columnStart={3} columnEnd={4} rowStart={1} rowEnd={2}>
            <Player formation="threefourthree" role="FWL" user={props.user}   />  
        </Grid.Item>
        <Grid.Item columnStart={4} columnEnd={5} rowStart={1} rowEnd={2}>
            <Player formation="threefourthree" role="FW" user={props.user}   />  
        </Grid.Item>
        <Grid.Item columnStart={5} columnEnd={6} rowStart={1} rowEnd={2}>
            <Player formation="threefourthree" role="FWR" user={props.user}   />  
        </Grid.Item>

        <Grid.Item columnStart={1} columnEnd={3} rowStart={2} rowEnd={3}>
            <Player formation="threefourthree" role="ML" user={props.user}   />
        </Grid.Item>
        <Grid.Item columnStart={3} columnEnd={4} rowStart={2} rowEnd={3}>
            <Player formation="threefourthree" role="MCL" user={props.user}    />
        </Grid.Item>
        <Grid.Item columnStart={5} columnEnd={6} rowStart={2} rowEnd={3}>
            <Player formation="threefourthree" role="MCR" user={props.user}    />
        </Grid.Item>
        <Grid.Item columnStart={6} columnEnd={-1} rowStart={2} rowEnd={3}>
            <Player formation="threefourthree" role="MR" user={props.user}   />
        </Grid.Item>

        <Grid.Item columnStart={3} columnEnd={4} rowStart={3} rowEnd={4}>
            <Player formation="threefourthree" role="DCL" user={props.user}   />
        </Grid.Item>
        <Grid.Item columnStart={4} columnEnd={5} rowStart={3} rowEnd={4}>
            <Player formation="threefourthree" role="DC" user={props.user}  />
        </Grid.Item>
        <Grid.Item columnStart={5} columnEnd={6} rowStart={3} rowEnd={4}>
            <Player formation="threefourthree" role="DCR" user={props.user}   />
        </Grid.Item>

        <Grid.Item columnStart={4} columnEnd={5} rowStart={4} rowEnd={5}>
            <Player formation="threefourthree" role="GK" user={props.user}    />
        </Grid.Item>

    </Grid>
    )
}


