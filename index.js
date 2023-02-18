const express = require("express");
const app = express();
const cors = require("cors")
const port = 3456;


app.use(cors());
app.use(express.json());
app.use('/api', require("./Routes"))


app.listen(port, () => {
    { console.log(`server is running at port ${port}`) };
})