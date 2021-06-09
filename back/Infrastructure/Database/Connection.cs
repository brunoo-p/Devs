using MongoDB.Driver;

namespace back.Infrastructure.Database
{
    public class Connection
    {
        public IMongoDatabase database;
        
        public Connection()
        {
            try{

                var client = new MongoClient("mongodb://root:exemple@mongo");
                //Mongo Atlas Database
                //var client = new MongoClient("Connection String");
                database = client.GetDatabase("Devs");
                
            }catch(MongoException ex){

                throw new MongoException("It was not possible to connect to Database", ex);
            }
        }
    }
}