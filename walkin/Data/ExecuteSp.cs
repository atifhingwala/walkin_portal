using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using MySqlConnector;
using walkin.models;

namespace walkin.Data
{
    public class ExecuteSp
    {   
        string sql_connect1= "server=localhost;user=root;password=Bobby800;database=walk_in";
        string sql_connect2= "server=localhost;user=root;password=Bobby800;database=register";
        
        public DataSet ExecuteList()
        {
            DataSet table= new DataSet();
            string spName="getWalkInList";

            MySqlConnection connected= new MySqlConnection(sql_connect1);
            connected.Open();

            // string query="Select * from venue";
            MySqlCommand command=new MySqlCommand(spName, connected);
            command.CommandType= CommandType.StoredProcedure;

            MySqlDataAdapter myReader= new MySqlDataAdapter(command);

            myReader.Fill(table);

            return table;

        }

        public DataSet ExecuteDetailById(int id)
        {
            System.Console.WriteLine(id);
            DataSet table= new DataSet();
            string spName="getWalkInDetailById";

            MySqlConnection connected= new MySqlConnection(sql_connect1);
            connected.Open();

            // string query="Select * from venue";
            MySqlCommand command=new MySqlCommand(spName, connected);
            command.CommandType= CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@id", id);

            MySqlDataAdapter myReader= new MySqlDataAdapter(command);

            myReader.Fill(table);

            return table;

        }

        public DataSet ExecuteRoleDetailById(int id)
        {
            System.Console.WriteLine(id);
            DataSet table= new DataSet();
            string spName="getRoleDetailById";

            MySqlConnection connected= new MySqlConnection(sql_connect1);
            connected.Open();

            // string query="Select * from venue";
            MySqlCommand command=new MySqlCommand(spName, connected);
            command.CommandType= CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@id", id);

            MySqlDataAdapter myReader= new MySqlDataAdapter(command);

            myReader.Fill(table);

            return table;

        }

        public DataSet ExecutePreRequisiteDetailById(int id)
        {
            System.Console.WriteLine(id);
            DataSet table= new DataSet();
            string spName="getPreRequisiteDetailById";

            MySqlConnection connected= new MySqlConnection(sql_connect1);
            connected.Open();

            // string query="Select * from venue";
            MySqlCommand command=new MySqlCommand(spName, connected);
            command.CommandType= CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@id", id);

            MySqlDataAdapter myReader= new MySqlDataAdapter(command);

            myReader.Fill(table);

            return table;

        }

        public DataTable registerUser(RegisterCredentials db_data)
        {   
            DataTable table= new DataTable();
            System.Console.WriteLine(db_data.f_name);

            string appeared_for_test= db_data.appeared_for_test;
            if(appeared_for_test=="No")
            {
                db_data.appeared_for_test="0";
            }
            else{
                db_data.appeared_for_test="1";
            }

            

            string[] job_roles={"Instructional Engineer","Software Quality Engineer", "Software Engineer"};
            bool[] j= db_data.preferred_job_role;
            string role="";

            string[] expertise_skills={"JavaScript", "Angualr JS", "React", "Node JS"};
            bool[] e= db_data.expertise_tech;
            string e_tech="";

            string[] familiar_skills={"JavaScript", "Angualr JS", "React", "Node JS"};
            bool[] f= db_data.familiar_tech;
            string f_tech="";

            if(db_data.isFresher=="fresher"){
                for(int i=0; i<job_roles.Length; i++)
                {
                    if(j[i]==true)
                    {
                        role= role+ i+ ",";
                    }
                }

                for(int i=0; i<expertise_skills.Length; i++)
                {
                    if(e[i]==true)
                    {
                        e_tech= e_tech+ i + ",";
                    }
                }
                db_data.isFresher="1";
            }
            else if(db_data.isFresher=="experience"){
                for(int i=0; i<job_roles.Length; i++)
                {
                    if(j[i]==true)
                    {
                        role= role+ i+ ",";
                    }
                }

                for(int i=0; i<familiar_skills.Length; i++)
                {
                    if(f[i]==true)
                    {
                        f_tech= f_tech+ i+ ",";
                    }
                }
                for(int i=0; i<expertise_skills.Length; i++)
                {
                    if(e[i]==true)
                    {
                        e_tech= e_tech+ i + ",";
                    }
                }
                db_data.isFresher="0";
            }
            System.Console.WriteLine(role);
            System.Console.WriteLine(e_tech);
            System.Console.WriteLine(f_tech);

            string spName="createUser";

            //connection establish for register database
            MySqlConnection connected= new MySqlConnection(sql_connect2);
            connected.Open();

            //register database insert
            MySqlCommand command=new MySqlCommand(spName, connected);
            command.CommandType= CommandType.StoredProcedure;
            command.Parameters.AddRange(new []
                {
                    new MySqlParameter("@f_name", db_data.f_name),
                    new MySqlParameter("@l_name", db_data.l_name),
                    new MySqlParameter("@email", db_data.email),
                    new MySqlParameter("@pswd", db_data.password),
                    new MySqlParameter("@phone_no", db_data.phone_no),
                    new MySqlParameter("@portfolio", db_data.portfolio),
                    new MySqlParameter("@appeared_for_test", db_data.appeared_for_test),
                    new MySqlParameter("@agg_percentage", db_data.agg_percentage),
                    new MySqlParameter("@year_of_passing", db_data.year_of_passing),
                    new MySqlParameter("@collegeLocation", db_data.college_location),
                    new MySqlParameter("@isFresher", db_data.isFresher),
                    new MySqlParameter("@years_of_experience", db_data.years_of_experience),
                    new MySqlParameter("@current_ctc", db_data.current_ctc),
                    new MySqlParameter("@expected_ctc", db_data.expected_ctc),
                    new MySqlParameter("@familiar_tech", f_tech),
                    new MySqlParameter("@expertise_tech", e_tech),
                    new MySqlParameter("@preferences", role)

                });
            
            MySqlDataAdapter myReader= new MySqlDataAdapter(command);

            myReader.Fill(table);

            return table;
            

            
        }

        public IDictionary<string, string> getLoginCredentials()
        {
            MySqlConnection connection =new MySqlConnection(sql_connect2);
            connection.Open();

            DataTable table=new DataTable();

            string query="select email, password from user";

            MySqlCommand command= new MySqlCommand(query, connection);
            

            MySqlDataAdapter myReader= new MySqlDataAdapter(command);

            myReader.Fill(table);

            IDictionary<string, string> table1=table.AsEnumerable()
                .ToDictionary<DataRow, string, string>(row => row.Field<string>(0),
                                        row => row.Field<string>(1));

            return table1;
        }


        public void registerInWalkIn(RegisterCredentials db_data)
        {   
            string spName= "InsertUser";    

            MySqlConnection connection= new MySqlConnection(sql_connect1);
            connection.Open();

            MySqlCommand command= new MySqlCommand(spName, connection);
             command.CommandType= CommandType.StoredProcedure;
             command.Parameters.AddWithValue("@user_id", db_data.user_id);
             command.Parameters.AddWithValue("@first_name", db_data.f_name);
             command.Parameters.AddWithValue("@username", db_data.f_name+db_data.l_name);
             command.Parameters.AddWithValue("@email", db_data.email);
             command.Parameters.AddWithValue("@phone_no", db_data.phone_no);

             command.ExecuteNonQuery();

        }

        public DataSet insertRegistrationInWalkIn(insertRegistrationInWalkIn data)
        {   
            DataSet table= new DataSet();

            var d= new Dictionary<int, int>()
            {
                { 0, 111 },
                { 1, 112 },
                { 2, 113 }
            };
            string roles="";
            bool[] b= data.job_role_id;

            System.Console.WriteLine(b[0]);
            System.Console.WriteLine(b.Length);
            for(int i=0; i<b.Length; i++)
            {
                System.Console.WriteLine(1);
                if(b[i]==true)
                {
                    System.Console.WriteLine(2);
                    // if(d.Any( d => d.Key==i))
                    // {
                    //     roles=roles+d.Value+',';
                    // }
                    // System.Console.WriteLine(roles);
                    foreach(var r in d)
                    {
                        if(r.Key==i)
                        {
                            roles=roles+r.Value+',';
                        }
                    }
                    System.Console.WriteLine(roles);
                }
            }
            System.Console.WriteLine(roles);

            string spName= "insertIntoRegisterTable";

            MySqlConnection connection= new MySqlConnection(sql_connect1);
            connection.Open();

            MySqlCommand command= new MySqlCommand(spName, connection);
             command.CommandType= CommandType.StoredProcedure;
             command.Parameters.AddWithValue("@user_id", data.user_id);
             command.Parameters.AddWithValue("@slot_id", data.slot_id);
             command.Parameters.AddWithValue("@job_role_id", roles);
             command.Parameters.AddWithValue("@walkin_id", data.walkin_id);
             

             MySqlDataAdapter reader=new MySqlDataAdapter(command);
             reader.Fill(table);

             return table;

        }

        
        public DataSet hallTicket(hallTicket data)
        {
            DataSet table=new DataSet();

            string spName="hallTicket";

            MySqlConnection connection= new MySqlConnection(sql_connect1);
            connection.Open();

            MySqlCommand command= new MySqlCommand(spName, connection);
             command.CommandType= CommandType.StoredProcedure;
             command.Parameters.AddWithValue("@user_id", data.user_id);
             command.Parameters.AddWithValue("@slot_id", data.slot_id);
             command.Parameters.AddWithValue("@walkin_id", data.walkin_id);
             

             MySqlDataAdapter reader=new MySqlDataAdapter(command);
             reader.Fill(table);


            return table;
        }
    }
}