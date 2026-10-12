using ATMMonitoringWebApp.Data;
using ATMMonitoringWebApp.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Caching.Memory;
using System.ComponentModel.DataAnnotations;

namespace ATMMonitoringWebApp.Areas.Identity.Pages.Account
{
    public class LoginModel : PageModel
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IMemoryCache _cache;
        private readonly EmailService _emailService;

        public LoginModel(
            UserManager<ApplicationUser> userManager,
            IMemoryCache cache,
            EmailService emailService)
        {
            _userManager = userManager;
            _cache = cache;
            _emailService = emailService;
        }

        [BindProperty]
        public InputModel Input { get; set; } = new InputModel();

        public class InputModel
        {
            [Required]
            [EmailAddress]
            public string Email { get; set; } = "";

            [Required]
            [DataType(DataType.Password)]
            public string Password { get; set; } = "";
        }

        public IActionResult OnGet()
        {
            if (User.Identity != null && User.Identity.IsAuthenticated)
            {
                return LocalRedirect("/Dashboard");
            }

            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            var user = await _userManager.FindByEmailAsync(Input.Email);

            if (user == null)
            {
                ModelState.AddModelError(string.Empty, "Invalid email or password.");
                return Page();
            }

            var passwordValid = await _userManager.CheckPasswordAsync(user, Input.Password);

            if (!passwordValid)
            {
                ModelState.AddModelError(string.Empty, "Invalid email or password.");
                return Page();
            }

            var otp = Random.Shared.Next(100000, 999999).ToString();

            _cache.Set(
                "OTP_" + Input.Email.ToLower(),
                otp,
                TimeSpan.FromMinutes(5)
            );

            await _emailService.SendOtpAsync(Input.Email, otp);

            return RedirectToPage("./VerifyOtp", new { email = Input.Email });
        }
    }
}