using System.Collections.Generic;
using back.Infrastructure.Entities;

namespace back.Domain.Interface
{
    public interface IDeveloperRepository<T> where T : class
    {
       List<T> All();
       T GetByid(string id);
       bool Add(T obj);
       bool Update(string id, T obj);
       bool Delete(string id);
    }
}