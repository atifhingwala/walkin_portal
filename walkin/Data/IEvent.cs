using System.Collections.Generic;
using System.Threading.Tasks;
using walkin.models;

namespace walkin.Data
{
    public interface IEvent
    {
        IEnumerable<Event> GetAllDetails();

        Event GetDetailById(int id); 

        Task<List<string>> getData();

    }
}