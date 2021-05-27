using System.Collections.Generic;

namespace back.Domain.Interface
{
    public interface IDeveloperRepository<T> where T : class
    {
       List<T> GetAll_Or_WithParam(string param);
       T GetByid(string id);
       bool Add(T obj);
       bool Update(string id, T obj);
       bool Delete(string id);
    }
}