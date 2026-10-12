using ATMMonitoringWebApp.Data;
using ATMMonitoringWebApp.Models;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;

namespace ATMMonitoringWebApp.Pages
{
    public class ATMStatusModel : PageModel
    {
        private readonly ApplicationDbContext _context;

        public ATMStatusModel(ApplicationDbContext context)
        {
            _context = context;
        }

        public void OnGet()
        {
        }

        public async Task<IActionResult> OnGetATMStatusAsync(string atmId)
        {
            if (string.IsNullOrWhiteSpace(atmId))
            {
                return new JsonResult(new
                {
                    success = false,
                    message = "Please enter ATM ID"
                });
            }

            var status = await _context.ATMStatuses
                .FirstOrDefaultAsync(x => x.ATMID == atmId);

            if (status == null)
            {
                return new JsonResult(new
                {
                    success = false,
                    message = "Terminal ID not found"
                });
            }

            return new JsonResult(new
            {
                success = true,
                data = status
            });
        }
    }
}