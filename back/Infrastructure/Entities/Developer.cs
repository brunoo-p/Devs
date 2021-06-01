using System;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Http;
using MongoDB.Bson.Serialization.Attributes;

namespace back.Infrastructure.Entities
{
    public class Developer : Base
    {
        
        [BsonRequired]
        public string Name { get;  set; }
        
        [BsonRequired]
        public char Gender { get;  set; }
        
        public int Age { get;  set; }
        
        public string Hobby { get;  set; }
        
        public string BirthDate { get;  set; }

        public bool IsDeleted { get; set; } = false;
        public string ImageProfile { get; set; }

        public IFormFile PathImage { get; set; }
        public Developer(string name, char gender, int age, string birthDate)
        {
            Name = name;
            Gender = gender;
            Age = age;
            BirthDate = birthDate;
        }


        public Developer(string name, string hobby, string imageProfile)
        {
            Name = name;
            Hobby = hobby;
            ImageProfile = imageProfile;
        }
        

        public Developer(){ }
    }
}