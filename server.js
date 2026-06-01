import "dotenv/config"

import app from "./src/app.js"
import connectToDB from "./src/config/db.js"

connectToDB()

app.listen(8200, () => {
    console.log("Server is running on port 8200")
})