# MERN-YouTube-API
This web-application about football news links MERN (**MongoDB**, **Express**, **React**, **Node**) stack with YouTube API.

The idea is to create a backend API storing user selected football players in MongoDB and retrieving searched videos result from YouTube for those football players. All these data would be reverted by the backend API to frontend React web-application.

It is only hosted on localhost at the moment. In other words, you could follow command line in instruction so as to install and run the webpage. Below is an example of the resultant webpages:

![alt text](https://github.com/wpl245hk/MERN-YouTube-API/blob/main/Frontend%20football%20field.PNG?raw=true)
![alt text](https://github.com/wpl245hk/MERN-YouTube-API/blob/main/Frontend%20login.PNG?raw=true)
![alt text](https://github.com/wpl245hk/MERN-YouTube-API/blob/main/Backend%20Youtube.PNG?raw=true)

***Instruction***:
*CLI for Backend*:
npm init -y
npm install nodemon cors dotenv express mongodb axios
nodemon server

*CLI for Frontend*:
npx create-react-app frontend
npm install react-router-dom axios @react-css/grid

*package.json for Backend*:
package.json ..> add “type”: “module,

*.env for Backend*:
MONGODB_URI = The connection string of mongodb cluster
MONGODB_NS = The name of mongodb database
YOUTUBE_API_KEY = The API key for youtube data api
PORT = The port no. for backend server

