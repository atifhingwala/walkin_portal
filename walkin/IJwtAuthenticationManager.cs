using walkin.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace walkin
{
    public interface IJwtAuthenticationManager
    {
        string Authenticate(string email, string password);
    }
}
