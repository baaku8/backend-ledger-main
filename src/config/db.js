import mongoose from "mongoose"


function connectToDB() {

    mongoose.connect(`mongodb+srv://capsicumbroth_db_user:mongo_db_youtube_backend@cluster-youtube.5zooy8d.mongodb.net/transaction-project`)
        .then(() => {
            console.log("server is connected to DB")
        })
        .catch(err => {
            console.log("Error connecting to DB")
            process.exit(1)
        })

}


export default connectToDB