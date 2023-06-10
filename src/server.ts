//the reason for creating a server.ts is jest/super test cause an port already used issued on app.listen to fix this, it is moved
//into a new file to avoid that error

import app from './index.js'

app.listen(process.env.SERVER_PORT,() => {
    console.log(`Server Started at localhost:${process.env.SERVER_PORT}`);
});