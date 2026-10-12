using ATMMonitoringWebApp.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Caching.Memory;
using System.ComponentModel.DataAnnotations;

namespace ATMMonitoringWebApp.Areas.Identity.Pages.Account
{
    public class VerifyOtpModel : PageModel
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IMemoryCache _cache;

        public VerifyOtpModel(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            IMemoryCache cache)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _cache = cache;
        }

        [BindProperty]
        public string Email { get; set; } = "";

        [BindProperty]
        [Required]
        public string Otp { get; set; } = "";

        public IActionResult OnGet(string email)
        {
            if (string.IsNullOrWhiteSpace(email))
            {
                return RedirectToPage("./Login");
            }

            Email = email;
            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            string cacheKey = "OTP_" + Email.ToLower();

            if (!_cache.TryGetValue(cacheKey, out string? savedOtp))
            {
                ModelState.AddModelError(string.Empty, "OTP expired. Please request a new OTP.");
                return Page();
            }

            if (savedOtp != Otp)
            {
                ModelState.AddModelError(string.Empty, "Invalid OTP.");
                return Page();
            }

            var user = await _userManager.FindByEmailAsync(Email);

            if (user == null)
            {
                ModelState.AddModelError(string.Empty, "User not found.");
                return Page();
            }

            await _signInManager.SignInAsync(user, isPersistent: false);

            _cache.Remove(cacheKey);

            return LocalRedirect("/Dashboard");
        }
    }
}