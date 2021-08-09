namespace walkin.models
{
    public class insertRegistrationInWalkIn
    {
        public string user_id { get; set; }
        public int walkin_id { get; set; }
        public int slot_id { get; set; }
        public bool[] job_role_id { get; set; }
    }
}