using Microsoft.AspNetCore.Identity;

namespace ATMMonitoringWebApp.Data;

public class ApplicationUser : IdentityUser
{
    public string FullName { get; set; } = "";

    public string Status { get; set; } = "Active";

    public DateTime CreatedDate { get; set; }
        = DateTime.Now;

    public DateTime ModifiedDate { get; set; }
        = DateTime.Now;
}