using System;
using System.Collections.Generic;
using back.Domain.Interface;
using back.Infrastructure.Database;
using back.Infrastructure.Entities;
using MongoDB.Driver;

namespace back.Domain.Repository
{
    public class DeveloperRepository : IDeveloperRepository<Developer>
    {
        Connection _mongoDB;
        IMongoCollection<Developer> _devCollection;
        public DeveloperRepository(Connection connection)
        {
            _mongoDB = connection;
            _devCollection = _mongoDB.database.GetCollection<Developer>("Developer");
        }

        public bool Add(Developer obj)
        {
            try
            {

                // (string Name, char Gender, int Age, string Hobby, DateTime BirthDate ) = obj;

                var dev = new Developer(
                    name: obj.Name,
                    gender: obj.Gender,
                    age: obj.Age,
                    hobby: obj.Hobby,
                    birth: obj.BirthDate
                );

                _devCollection.InsertOne(dev);
                return true;
            }catch(Exception)
            {
                return false;
            }
        }

        public List<Developer> All()
        {
            try{

                return _devCollection.Find(Builders<Developer>.Filter.Where(_ => _.isDeleted != true))
                    .SortBy(_ => _.Name)
                    .ToList();
            }catch(Exception){

                return null;
            }
        }

        public bool Delete(int id)
        {
            try
            {
                _devCollection.UpdateOne(Builders<Developer>.Filter.Where(_ => _.Id == id), Builders<Developer>.Update.Set("IsDeleted", true));
                return true;

            }catch(Exception)
            {
                return false;
            }
        }

        public Developer GetByid(int id)
        {
            var dev = _devCollection.Find(Builders<Developer>.Filter.Where(_ => _.Id == id));

            return (Developer) dev;
        }

        public bool Update(Developer obj)
        {
            var dev = new Developer(
                    obj.Name,
                    obj.Gender,
                    obj.Age,
                    obj.Hobby,
                    obj.BirthDate
            );

            try{
                //_devCollection.FindOneAndDeleteAsync(Builders<Developer>.Filter.Where(_ => _.Id == obj.Id));
                //_devCollection.InsertOne(dev);
                
                _devCollection.UpdateOne(Builders<Developer>.Filter.Where(_ => _.Id == obj.Id), Builders<Developer>.Update
                    .Set("Name", obj.Name)
                    .Set("Gender", obj.Gender)
                    .Set("Age", obj.Age)
                    .Set("Hobby", obj.Hobby) 
                );

                return true;
            
            }catch
            {
                return false;
            }
        }
    }
}