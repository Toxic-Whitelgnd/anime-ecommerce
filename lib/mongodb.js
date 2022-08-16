import mongoose from "mongoose";

const connection = {};

async function connect (){
    if(connection.isConnected){
        return;
    }
    const db = await mongoose.connect(process.env.NEXT_MONGODB_URL)

    connection.isConnected = db.connections[0].readyState;
}

export default connect;