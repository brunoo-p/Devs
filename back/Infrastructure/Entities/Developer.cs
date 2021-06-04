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
        public string Nickname { get; set; }
        
        [BsonRequired]
        public char Gender { get;  set; }

        public char SchooseGender { get; set; }  

        public int Age { get;  set; }
        
        public string Hobby { get;  set; }
        [BsonRequired]
        public string BirthDate { get;  set; }

        public bool IsDeleted { get; set; } = false;
        public byte[] ImageProfile { get; set; }

        [NotMapped]
        public IFormFile ImagePath { get; set; }
        public Developer(string name, string nickname, char gender, char schooseGender, int age, string birthDate)
        {
            Name = name;
            Nickname = nickname;
            Gender = gender;
            SchooseGender = schooseGender;
            Age = age;
            BirthDate = birthDate;
        }


        public Developer(string name, string hobby, byte[] imageProfile)
        {
            Name = name;
            Hobby = hobby;
            ImageProfile = imageProfile;
        }
        

        public Developer(){ }
    }
}