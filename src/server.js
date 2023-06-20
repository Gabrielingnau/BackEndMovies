require("express-async-errors")

const cors = require("cors")

const migrationsRun = require("./database/sqlite/migrations")
const uploadConfig = require("./configs/upload")

const express = require("express")

const routes = require("./routes")

migrationsRun();

const AppError = require("./utils/AppError")

const app = express();
app.use(express.json())

app.use(cors())
app.use(routes);
app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));


app.use((error, request, response, next) => {
   if(error instanceof AppError) {
    return response.status(error.statusCode).json({
        status: "error",
        message: error.message
    })
   }

   console.error(error)

   return response.status(500).json({
    status: "error",
    message: "Internal server error"
   })
})

const PORT = 3334;


app.listen(PORT, () => console.log(`server is running on port ${PORT}`))