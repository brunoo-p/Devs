using System.Collections.Generic;
using back.Infrastructure.Entities;

namespace back.Domain.Interface
{
    public interface IDeveloperRepository<T> where T : class
    {
       List<T> All();
       T GetByid(int id);
       bool Add(T obj);
       bool Update(T obj);
       bool Delete(int id);
    }
}