using System;

namespace back.Infrastructure.Entities
{
    public class Developer : Base
    {
        public string Name { get;  set; }
        public char Gender { get;  set; }
        public int Age { get;  set; }
        public string Hobby { get;  set; }
        public DateTime BirthDate { get;  set; }

        public bool isDeleted { get; set; } = false;

        public Developer(string name, char gender, int age, string hobby, DateTime birth)
        {
            Name = name;
            Gender = gender;
            Age = age;
            Hobby = hobby;
            BirthDate = birth;
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