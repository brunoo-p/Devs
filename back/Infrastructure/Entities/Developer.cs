using System;
using MongoDB.Bson.Serialization.Attributes;

namespace back.Infrastructure.Entities
{
    public class Developer : Base
    {
        
        [BsonRequired]
        public string Name { get;  set; }
        
        [BsonRequired]
        public char Gender { get;  set; }
        
        [BsonRequired]
        public int Age { get;  set; }
        
        public string Hobby { get;  set; }
        
        public DateTime BirthDate { get;  set; }

        public bool IsDeleted { get; set; } = false;

        public Developer(string name, char gender, int age, string hobby, DateTime birthDate)
        {
            Name = name;
            Gender = gender;
            Age = age;
            Hobby = hobby;
            BirthDate = birthDate;
        }

        // public void setName(string name){
        //     Name = name;
        // }
        // public void setGender(char gender){
        //     Gender = gender;
        // }
        // public void setAge(int age){
        //     Age = age;
        // }
        // public void setHobby(string hobby){
        //     Hobby = hobby;
        // }
        // public void setBirth(DateTime birth){
        //     BirthDate = birth;
        // }

    }
}