const dotenv = require('dotenv');
const path = require('path');



dotenv.config({path: path.join(process.cwd(), '.env')})


module.exports={
    port: process.env.PORT,
}



