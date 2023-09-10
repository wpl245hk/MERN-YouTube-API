import React, {useState, useEffect} from 'react';
import httpsBackend from '../services/backend.js';

const Player = (props) => {
    
    let initialName = props.user.formation.hasOwnProperty(props.formation) && props.user.formation[props.formation].hasOwnProperty(props.role) ?
    props.user.formation[props.formation][props.role] : ""

    const [name, setName] = useState(initialName);
    const [youtubeVideos, setYoutubeVideos] = useState({});

    const onChangeSearchName = event => {setName(event.target.value);}

    const onClickSearchName = () => {
        let userRecord = {
            username: props.user.username,
            password: props.user.password,
            formation: {[props.formation]: {[props.role]: name}}
        }
        updateMongo(userRecord);
        retrieveYoutube();
    }

    const retrieveYoutube = () => {
        httpsBackend.youtubeFunction(name)
        .then(response => {
            console.log("Trying to get YoutubeAPI", response);
            setYoutubeVideos(response.data.items);
        })
        .catch(e => {
            console.error(e);
        })
    }

    const updateMongo = (userRecord) => {
        httpsBackend.mongodbPostFunction(userRecord)
        .then(response => {
            console.log(response);
        })
        .catch(e => {
            console.error(e);}
        )
    }

    useEffect( () => {
        retrieveYoutube();}, []
    );

    
    return (
    <div className="player" >
        <input
            type="text"
            placeholder={props.role}
            value={name}
            onChange={onChangeSearchName}
        />
        <button onClick={onClickSearchName}>sub</button>
        <div className="videos">
            {Array.from(youtubeVideos).map( 
                (youtubeVideo) => { return (
                <div className="video">
                    <a href={'https://www.youtube.com/watch?v='+ youtubeVideo.id.videoId} target="_blank" rel="noopener noreferrer">
                        <figcaption title={youtubeVideo.snippet.description}>{youtubeVideo.snippet.description.substr(0,20) }</figcaption>
                        <img src={youtubeVideo.snippet.thumbnails.default.url} alt="Youtube video"  /> 
                    </a>
                </div>
            )})}
        </div>

    </div>
    )
}


export default Player;