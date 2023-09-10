
let connectedDB;


class httpsMongoDB {

  static async injectDB(conn){
    if (connectedDB){return}  
    try {connectedDB = await conn.db(process.env.MONGODB_NS).collection("clientInfo");
      console.log(`Connection to mongodb [clientInfo] succesfully`)} 
    catch (e) {console.error(`error: Cannot connect to mongodb ${e}`) }
  }

  static async getFunction (searchUsername, searchPassword){
    try {return await connectedDB.findOne(
      { $and :[
        {username: { $eq: searchUsername}},
        {password: { $eq: searchPassword}}]
      });
    } catch(e){console.error(`error: Cannot get from mongodb ${e}`)}
  } 


  static async postFunction (user){
    try {return await connectedDB.findOneAndUpdate(
      { username: { $eq: user.username},
        password: { $eq: user.password}},
      [ { $set: {"formation": user.formation }}],
      { upsert: true,
        returnNewDocument: true })
    } catch(e){console.error(`error: Cannot post to mongodb ${e}`)}
  } 

};


export default httpsMongoDB;