import express  from "express"
import dontenv from "dotenv"

const app = express();
dontenv.config();

app.listen(8800, () => {

});