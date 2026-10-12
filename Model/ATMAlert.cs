using System;
using System.ComponentModel.DataAnnotations;

namespace ATMMonitoringWebApp.Model
{
    public class ATMAlert
    {
        [Key]
        public int Id { get; set; }

        public string ATMID { get; set; }

        public string AlertType { get; set; }

        public string AlertMessage { get; set; }

        public DateTime CreatedDate { get; set; }
    }
}