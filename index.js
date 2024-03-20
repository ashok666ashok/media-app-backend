const JSONServer=require('json-server');
const MPServer=JSONServer.create();
const router=JSONServer.router('db.json');
const middilWare=JSONServer.defaults()

const PORT=3000||process.env.PORT

MPServer.use(middilWare)
MPServer.use(router)

MPServer.listen(PORT,()=>{
    console.log(`mediaplayer server started at PORT ${PORT} and waiting for the client request....`)
})