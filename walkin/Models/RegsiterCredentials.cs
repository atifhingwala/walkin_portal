namespace walkin.models
{
    public class RegisterCredentials
    {   
        public string f_name { get; set; }
        public string l_name { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string phone_no { get; set; }
        public string portfolio { get; set; }
        public bool[] preferred_job_role { get; set; }
        public string agg_percentage { get; set; }
        public string college_location { get; set; }
        public string year_of_passing { get; set; }
        public string isFresher { get; set; }
        public string appeared_for_test { get; set; }
        public string years_of_experience { get; set; }
        public string current_ctc { get; set; }
        public string expected_ctc { get; set; }
        public bool[] familiar_tech { get; set; }
        public bool[] expertise_tech { get; set; }

        public string user_id { get; set; }


    }
}