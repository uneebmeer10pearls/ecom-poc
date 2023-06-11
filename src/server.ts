//the reason for creating a server.ts is jest/super test cause an port already used issued on app.listen to fix this, it is moved
//into a new file to avoid that error

import app from './index.js'
const port = process.env.PORT || 8080
app.listen(port,() => {
    console.log(`Server Started at localhost:${port}`);
});