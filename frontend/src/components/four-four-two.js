import React, {useState} from 'react';
import Grid from '@react-css/grid';
import Player from './player.js';


export default function FourFourTwo (props)  {

    return (
    <Grid columns='auto auto auto auto auto auto auto' columnGap='10px'>
        <Grid.Item columnStart={3} columnEnd={4} rowStart={1} rowEnd={2}>
            <Player formation="fourfourtwo" role="FWL" user={props.user}  />  
        </Grid.Item>
        <Grid.Item columnStart={5} columnEnd={6} rowStart={1} rowEnd={2}>
            <Player formation="fourfourtwo" role="FWR" user={props.user}  />  
        </Grid.Item>

        <Grid.Item columnStart={1} columnEnd={3} rowStart={2} rowEnd={3}>
            <Player formation="fourfourtwo" role="AML" user={props.user}  />
        </Grid.Item>
        <Grid.Item columnStart={3} columnEnd={4} rowStart={2} rowEnd={3}>
            <Player formation="fourfourtwo" role="MCL" user={props.user}  />
        </Grid.Item>
        <Grid.Item columnStart={5} columnEnd={6} rowStart={2} rowEnd={3}>
            <Player formation="fourfourtwo" role="MCR" user={props.user}  />
        </Grid.Item>
        <Grid.Item columnStart={6} columnEnd={-1} rowStart={2} rowEnd={3}>
            <Player formation="fourfourtwo" role="AMR" user={props.user}  />
        </Grid.Item>

        <Grid.Item columnStart={2} columnEnd={3} rowStart={3} rowEnd={4}>
            <Player formation="fourfourtwo" role="DLC" user={props.user}  />
        </Grid.Item>
        <Grid.Item columnStart={3} columnEnd={4} rowStart={3} rowEnd={4}>
            <Player formation="fourfourtwo" role="DCL" user={props.user}  />
        </Grid.Item>
        <Grid.Item columnStart={5} columnEnd={6} rowStart={3} rowEnd={4}>
            <Player formation="fourfourtwo" role="DCR" user={props.user}  />
        </Grid.Item>
        <Grid.Item columnStart={6} columnEnd={7} rowStart={3} rowEnd={4}>
            <Player formation="fourfourtwo" role="DR" user={props.user}   />
        </Grid.Item>

        <Grid.Item columnStart={4} columnEnd={5} rowStart={4} rowEnd={5}>
            <Player formation="fourfourtwo" role="GK" user={props.user}   />
        </Grid.Item>

    </Grid>
    )
}


