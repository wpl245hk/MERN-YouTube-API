import React from 'react';
import Grid from '@react-css/grid';
import Player from './player.js';


export default function FourThreeThree (props)  {

    return (
    <Grid columns='auto auto auto auto auto auto auto' columnGap='10px'>
        <Grid.Item columnStart={4} columnEnd={5} rowStart={1} rowEnd={2}>
            <Player formation="fourthreethree" role="FW" user={props.user}   />  
        </Grid.Item>

        <Grid.Item columnStart={1} columnEnd={3} rowStart={2} rowEnd={3}>
            <Player formation="fourthreethree"  role="AML" user={props.user}    />
        </Grid.Item>
        <Grid.Item columnStart={6} columnEnd={-1} rowStart={2} rowEnd={3}>
            <Player formation="fourthreethree"  role="AMR" user={props.user}  />
        </Grid.Item>
        <Grid.Item columnStart={3} columnEnd={4} rowStart={3} rowEnd={4}>
            <Player formation="fourthreethree"  role="MCL" user={props.user}   />
        </Grid.Item>
        <Grid.Item columnStart={4} columnEnd={5} rowStart={3} rowEnd={4}>
            <Player formation="fourthreethree"  role="MC" user={props.user}    />
        </Grid.Item>
        <Grid.Item columnStart={5} columnEnd={6} rowStart={3} rowEnd={4}>
            <Player formation="fourthreethree"  role="MCR" user={props.user}    />
        </Grid.Item>

        <Grid.Item columnStart={2} columnEnd={3} rowStart={4} rowEnd={5}>
            <Player formation="fourthreethree"  role="DLC" user={props.user}  />
        </Grid.Item>
        <Grid.Item columnStart={3} columnEnd={4} rowStart={4} rowEnd={5}>
            <Player formation="fourthreethree"  role="DCL" user={props.user}   />
        </Grid.Item>
        <Grid.Item columnStart={5} columnEnd={6} rowStart={4} rowEnd={5}>
            <Player formation="fourthreethree"  role="DCR" user={props.user}   />
        </Grid.Item>
        <Grid.Item columnStart={6} columnEnd={7} rowStart={4} rowEnd={5}>
            <Player formation="fourthreethree"  role="DR" user={props.user}  />
        </Grid.Item>

        <Grid.Item columnStart={4} columnEnd={5} rowStart={5} rowEnd={6}>
            <Player role="GK" user={props.user}    />
        </Grid.Item>

    </Grid>
    )
}


