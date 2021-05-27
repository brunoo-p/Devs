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
        readonly Connection _mongoDB;
        readonly IMongoCollection<Developer> _devCollection;

        public DeveloperRepository(){}

        public DeveloperRepository(Connection connection)
        {
            _mongoDB = connection;
            _devCollection = _mongoDB.database.GetCollection<Developer>("Developer");
        }

        public bool Add(Developer obj)
        {
            try
            {

                //(string Name, char Gender, int Age, string Hobby, DateTime BirthDate ) = obj;

                var dev = new Developer(
                    obj.Name,
                    obj.Gender,
                    obj.Age,
                    obj.Hobby,
                    obj.BirthDate
                );

                _devCollection.InsertOne(dev);
                return true;

            }catch(Exception)
            {
                //throw new Exception("error: ", err);
                return false;
            }
        }

        public List<Developer> All()
        {
            try{

                return _devCollection.Find(Builders<Developer>.Filter.Where(_ => _.IsDeleted != true))
                    .SortBy(_ => _.Name)
                    .ToList();
                    
            }catch(Exception){

                return null;
            }
        }

        public bool Delete(string id)
        {
            try
            {
                //var dev = ifExist(id);
                var dev = _devCollection.UpdateOne(Builders<Developer>.Filter.Where(_ => _.Id == id), Builders<Developer>.Update.Set("IsDeleted", true));
                

                if(dev == null){
                    return false;
                }
                return true;

            }catch(Exception)
            {
                return false;
            }
        }

        public Developer GetByid(string id)
        {
            var dev = ifExist(id);
            
            if(dev == null){
                return null;
            }

            return (Developer) dev;
        }

        public List<Developer> GetAll_Or_WithParam(string param)
        {
            param = param.ToLower();
            
            var dev = _devCollection.Find(Builders<Developer>.Filter.Where(_ => _.IsDeleted != true))
                .ToList();
            
            var finded = new List<Developer>();

                foreach(var find in dev){
                    if(find.Hobby.ToLower().Contains(param) || find.Name.ToLower().Contains(param)){

                        finded.Add(find);
                    };
                }
            

            return finded;

        }
        

        public bool Update(string id, Developer obj)
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
                
                _devCollection.UpdateOne(Builders<Developer>.Filter.Where(_ => _.Id == id), Builders<Developer>.Update
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

        private Developer ifExist(string id){
            
            var dev =_devCollection.Find(Builders<Developer>.Filter.Where(_ => _.Id == id && _.IsDeleted != true)).FirstOrDefault();
            
            if(dev == null){
                return null;
            }

            return dev;
        }
    }
}