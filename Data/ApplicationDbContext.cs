using ATMMonitoringWebApp.Model;
using ATMMonitoringWebApp.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace ATMMonitoringWebApp.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<ATM> ATMs { get; set; }
        public DbSet<ATMStatus> ATMStatuses { get; set; }
        public DbSet<ATMAlert> ATMAlerts { get; set; }
    }
}