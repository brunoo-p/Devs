using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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

        public async Task<bool> Add(Developer obj)
        {
            try
            {
                var findNickname = GetByNickname(obj.Nickname);
                
                if(findNickname != null){
                    return false;
                }

                var dev = new Developer(
                    name: obj.Name,
                    nickname: obj.Nickname,
                    gender: obj.Gender,
                    schooseGender: obj.SchooseGender,
                    age: obj.Age,
                    birthDate: obj.BirthDate
                );

                await _devCollection.InsertOneAsync(dev);
                return true;

            }catch(Exception)
            {
                return false;
            }
        }

        public bool Delete(string id)
        {
            try
            {
                //var dev = ifExist(id);
                var dev = _devCollection.UpdateOne(Builders<Developer>.Filter.Where(_ => _.Id == id), Builders<Developer>.Update.Set("IsDeleted", true));
                

                if(dev != null){
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

        public List<Developer> GetWithParam(string param)
        {
            try{

                
                var dev = _devCollection.Find(Builders<Developer>.Filter.Where(_ => _.IsDeleted != true))
                    .ToList();
                

                if(param == null){
                    return dev;
                }

                var finded = new List<Developer>();
                
                foreach(var find in dev){

                    var response = find.Hobby.ToLower();
                    
                    if(response.Contains(param)){

                        finded.Add(find);
                    };
                }

                return finded;

            }catch(Exception ex){
                throw new Exception("d", ex);
            }    
        }

        public List<Developer> GetByGender(char gender)
        {
            var dev = _devCollection.Find(Builders<Developer>.Filter.Where(_ => _.IsDeleted != true))
                .ToList();

            if(gender == 'T')
            {
                return dev;
            }

            var finded = new List<Developer>();
            foreach(var find in dev){

                if(find.Gender == gender){

                    finded.Add(find);
                };
            }

            return finded;
        }

        public Developer GetByNickname(string nickname)
        {
            return _devCollection.Find(Builders<Developer>.Filter
                .Where(_ => _.IsDeleted != true && _.Nickname == nickname))
                .FirstOrDefault();
        }
        

        public bool Update(string id, Developer obj)
        {
            var dev = new Developer(
                    name: obj.Name,
                    hobby: obj.Hobby,
                    imageProfile: obj.ImageProfile
            );

            try{
                
                _devCollection.UpdateOne(Builders<Developer>.Filter.Where(_ => _.Id == id), Builders<Developer>.Update
                    .Set("Name", dev.Name)
                    .Set("Hobby", dev.Hobby)
                    .Set("ImageProfile", dev.ImageProfile) 
                );

                return true;
            
            }catch(Exception ex)
            {
                throw new Exception("e", ex);
                //return false;
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