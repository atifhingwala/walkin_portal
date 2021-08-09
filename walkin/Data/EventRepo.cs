using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MySqlConnector;
using walkin.models;

namespace walkin.Data
{
    public class EventRepo : IEvent
    {

        string connection_string="server=localhost;user=root;password=Bobby800;database=walk_in";
        public Event GetDetailById(int id)
        {
            
            return new Event{id=2, name="yuvraj"};
            
        }

        public IEnumerable<Event> GetAllDetails()
        {
            
            var list= new List<Event>
            {   
                new Event{id=0, name="Atif"},
                new Event{id=1, name="Hingwala"}
            };

            return list;
        }

        
        async public Task<List<string>> getData()
        {
            using var connection = new MySqlConnection(connection_string);
            await connection.OpenAsync();

            using var command = new MySqlCommand("SELECT walkin_name from walkin_event", connection);
            System.Console.WriteLine(command);
            using var reader = command.ExecuteReader();
            System.Console.WriteLine(reader);

            // string value="";
            List<string> value= new List<string>();
            while (await reader.ReadAsync())
            {
                value.Add((string)reader.GetValue(0));
                                
            }
            
 
            return value;
            
            
        }
    }
}
//         public void getData()
//         {
//             using var connection = new MySqlConnection(connection_string);

//         // await connection.OpenAsync();

// using var command = new MySqlCommand("SELECT * from venue", connection);
// // using var reader = await command.ExecuteReaderAsync();
// while (await reader.ReadAsync())
// {
//     var value = reader.GetValue(0);
//     Console.WriteLine(value);
// }
//         }
//     }
// }
    