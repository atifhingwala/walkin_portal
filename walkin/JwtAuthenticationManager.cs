using walkin.models;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using walkin.Data;

namespace walkin
{
    public class JwtAuthenticationManager : IJwtAuthenticationManager
    {

        // private readonly IDictionary<string, string> users= new Dictionary<string, string>{
        //     {"atif", "password1"}, {"aquib", "password2"} } ;

         private string key;
        public JwtAuthenticationManager(string key)
        {
            this.key = key;
        }
       
       

        public string Authenticate(string email, string password)
        {
            ExecuteSp obj= new ExecuteSp();
            IDictionary<string, string> LoginData= obj.getLoginCredentials();

            if (!LoginData.Any(u => u.Key== email && u.Value== password))
            {
                return null;
            }
            
            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenkey = Encoding.ASCII.GetBytes(this.key);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Email, email)
                }),
                Expires = DateTime.UtcNow.AddHours(5),
                SigningCredentials = new SigningCredentials(
                    new SymmetricSecurityKey(tokenkey),
                    SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            
            return (tokenHandler.WriteToken(token));
            
        }
        
    }
}
