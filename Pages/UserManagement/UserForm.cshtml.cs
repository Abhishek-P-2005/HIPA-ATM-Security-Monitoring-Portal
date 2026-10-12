using ATMMonitoringWebApp.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ATMMonitoringWebApp.Pages.UserManagement
{
    public class UserFormModel : PageModel
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public UserFormModel(
            UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
        }

        [BindProperty]
        public InputModel Input { get; set; } = new();

        public List<string> Roles { get; set; } = new();

        public bool IsEditMode { get; set; }

        public class InputModel
        {
            public string Id { get; set; } = "";
            public string FullName { get; set; } = "";
            public string Email { get; set; } = "";
            public string Username { get; set; } = "";
            public string Password { get; set; } = "";
            public string Status { get; set; } = "Active";
            public string Role { get; set; } = "User";
        }

        public async Task<IActionResult> OnGetAsync(string? id)
        {
            LoadRoles();

            if (string.IsNullOrWhiteSpace(id))
            {
                IsEditMode = false;
                return Page();
            }

            IsEditMode = true;

            var user = await _userManager.FindByIdAsync(id);

            if (user == null)
            {
                return RedirectToPage("/UserManagement/Users");
            }

            var userRoles = await _userManager.GetRolesAsync(user);

            Input = new InputModel
            {
                Id = user.Id,
                FullName = user.FullName,
                Email = user.Email ?? "",
                Username = user.UserName ?? "",
                Status = user.Status,
                Role = userRoles.FirstOrDefault() ?? "User",
                Password = ""
            };

            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            LoadRoles();

            if (string.IsNullOrWhiteSpace(Input.Id))
            {
                var newUser = new ApplicationUser
                {
                    FullName = Input.FullName,
                    Email = Input.Email,
                    UserName = Input.Username,
                    EmailConfirmed = true,
                    Status = Input.Status,
                    CreatedDate = DateTime.Now,
                    ModifiedDate = DateTime.Now
                };

                var result = await _userManager.CreateAsync(newUser, Input.Password);

                if (!result.Succeeded)
                {
                    foreach (var error in result.Errors)
                    {
                        ModelState.AddModelError("", error.Description);
                    }

                    return Page();
                }

                await _userManager.AddToRoleAsync(newUser, Input.Role);

                return RedirectToPage("/UserManagement/Users");
            }

            var existingUser = await _userManager.FindByIdAsync(Input.Id);

            if (existingUser == null)
            {
                return RedirectToPage("/UserManagement/Users");
            }

            existingUser.FullName = Input.FullName;
            existingUser.Email = Input.Email;
            existingUser.UserName = Input.Username;
            existingUser.Status = Input.Status;
            existingUser.ModifiedDate = DateTime.Now;

            var updateResult = await _userManager.UpdateAsync(existingUser);

            if (!updateResult.Succeeded)
            {
                foreach (var error in updateResult.Errors)
                {
                    ModelState.AddModelError("", error.Description);
                }

                return Page();
            }

            var currentRoles = await _userManager.GetRolesAsync(existingUser);

            if (currentRoles.Any())
            {
                await _userManager.RemoveFromRolesAsync(existingUser, currentRoles);
            }

            await _userManager.AddToRoleAsync(existingUser, Input.Role);

            if (!string.IsNullOrWhiteSpace(Input.Password))
            {
                var token = await _userManager.GeneratePasswordResetTokenAsync(existingUser);
                var passwordResult = await _userManager.ResetPasswordAsync(existingUser, token, Input.Password);

                if (!passwordResult.Succeeded)
                {
                    foreach (var error in passwordResult.Errors)
                    {
                        ModelState.AddModelError("", error.Description);
                    }

                    return Page();
                }
            }

            return RedirectToPage("/UserManagement/Users");
        }

        private void LoadRoles()
        {
            Roles = _roleManager.Roles
                .Select(r => r.Name!)
                .ToList();
        }
    }
}