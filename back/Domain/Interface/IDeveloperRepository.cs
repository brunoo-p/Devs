using System.Collections.Generic;
using System.Threading.Tasks;

namespace back.Domain.Interface
{
    public interface IDeveloperRepository<T> where T : class
    {
       List<T> GetWithParam(string param);
       T GetByid(string id);
       List<T> GetByGender(char param);
       T GetByNickname(string param);
       Task<bool> Add(T obj);
       bool Update(string id, T obj);
       bool Delete(string id);
    }
}