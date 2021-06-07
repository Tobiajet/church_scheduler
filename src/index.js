import express from "express";
import cors from "cors";
import router from "./routes/index.js";


const port = process.env.port || 5000;
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));//to handle url encoded data


app.use('/', router)

app.listen(port, () => {
    console.log(`Server connected at  http://localhost:${port}`);
});