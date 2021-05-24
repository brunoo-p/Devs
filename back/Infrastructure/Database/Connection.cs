using MongoDB.Driver;

namespace back.Infrastructure.Database
{
    public class Connection
    {
        public IMongoDatabase database;
        
        public Connection()
        {
            try{

                var client = new MongoClient("mongodb://bruno:false@localhost:27017/admin");
                database = client.GetDatabase("Devs");
                
            }catch(MongoException ex){

                throw new MongoException("It was not possible to connect to Database", ex);
            }
        }
    }
}