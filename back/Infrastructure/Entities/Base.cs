using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace back.Infrastructure.Entities
{
    public abstract class Base
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
    }
}