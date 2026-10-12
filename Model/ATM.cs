using System.ComponentModel.DataAnnotations;

namespace ATMMonitoringWebApp.Models
{
    public class ATM
    {
        public int Id { get; set; }

        [Required]
        public string ATMID { get; set; } = "";

        public string Bank { get; set; } = "";

        public string IP { get; set; } = "";

        public string ATMType { get; set; } = "";

        public string Zone { get; set; } = "";

        public string State { get; set; } = "";

        public string City { get; set; } = "";

        public string Manufacturer { get; set; } = "";

        public string Status { get; set; } = "Active";

        public string DefaultPolicy { get; set; } = "";

        public string Port { get; set; } = "2025";

        public string Location { get; set; } = "";

        public string Address { get; set; } = "";

        public string BranchSOLID { get; set; } = "";

        public string BranchEmail { get; set; } = "";

        public string SerialNo { get; set; } = "";
    }
}