import mongoose from "mongoose"

const ConnectDB = async ()=>{
    try{
        if(mongoose.connection.readyState === 0){
            await mongoose.connect(process.env.MONGODB_URI as string)
            console.log('db connected');
            
        }

    }catch(error){
        console.log(error);
        
    }
}

export default ConnectDB