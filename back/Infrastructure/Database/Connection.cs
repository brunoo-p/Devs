using MongoDB.Driver;

namespace back.Infrastructure.Database
{
    public class Connection
    {
        public IMongoDatabase database;
        
        public Connection()
        {
            try{

                //var client = new MongoClient("mongodb://root:exemple@mongo:27017");
                var client = new MongoClient("mongodb+srv://brunoo-p:false@cluster.oyyye.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
                database = client.GetDatabase("Devs");
                
            }catch(MongoException ex){

                throw new MongoException("It was not possible to connect to Database", ex);
            }
        }
    }
}