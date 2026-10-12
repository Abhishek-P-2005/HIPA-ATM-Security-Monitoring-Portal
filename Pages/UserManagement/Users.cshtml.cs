using ATMMonitoringWebApp.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ATMMonitoringWebApp.Pages.UserManagement
{
    public class UsersModel : PageModel
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public UsersModel(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        public List<UserRow> Users { get; set; } = new();

        [BindProperty(SupportsGet = true)]
        public string Search { get; set; } = "";

        [BindProperty(SupportsGet = true)]
        public string RoleFilter { get; set; } = "";

        [BindProperty(SupportsGet = true)]
        public string StatusFilter { get; set; } = "";

        [BindProperty(SupportsGet = true)]
        public string DateFilter { get; set; } = "";

        [BindProperty(SupportsGet = true)]
        public int RowsPerPage { get; set; } = 10;

        [BindProperty(SupportsGet = true)]
        public int CurrentPage { get; set; } = 1;

        public int TotalUsers { get; set; }

        public int TotalPages { get; set; }

        public class UserRow
        {
            public string Id { get; set; } = "";
            public string FullName { get; set; } = "";
            public string Email { get; set; } = "";
            public string Username { get; set; } = "";
            public string Status { get; set; } = "";
            public string Role { get; set; } = "";
            public DateTime CreatedDate { get; set; }
            public DateTime ModifiedDate { get; set; }
        }

        public async Task OnGetAsync()
        {
            var allUsers = _userManager.Users.ToList();
            var rows = new List<UserRow>();

            foreach (var user in allUsers)
            {
                var roles = await _userManager.GetRolesAsync(user);

                rows.Add(new UserRow
                {
                    Id = user.Id,
                    FullName = user.FullName,
                    Email = user.Email ?? "",
                    Username = user.UserName ?? "",
                    Status = user.Status,
                    Role = roles.FirstOrDefault() ?? "No Role",
                    CreatedDate = user.CreatedDate,
                    ModifiedDate = user.ModifiedDate
                });
            }

            if (!string.IsNullOrWhiteSpace(Search))
            {
                rows = rows.Where(u =>
                    u.FullName.Contains(Search, StringComparison.OrdinalIgnoreCase) ||
                    u.Email.Contains(Search, StringComparison.OrdinalIgnoreCase) ||
                    u.Username.Contains(Search, StringComparison.OrdinalIgnoreCase)
                ).ToList();
            }

            if (!string.IsNullOrWhiteSpace(RoleFilter))
            {
                rows = rows.Where(u => u.Role == RoleFilter).ToList();
            }

            if (!string.IsNullOrWhiteSpace(StatusFilter))
            {
                rows = rows.Where(u => u.Status == StatusFilter).ToList();
            }

            rows = DateFilter switch
            {
                "newest" => rows.OrderByDescending(u => u.CreatedDate).ToList(),
                "oldest" => rows.OrderBy(u => u.CreatedDate).ToList(),
                "modifiedNewest" => rows.OrderByDescending(u => u.ModifiedDate).ToList(),
                _ => rows
            };

            TotalUsers = rows.Count;

            TotalPages = (int)Math.Ceiling(TotalUsers / (double)RowsPerPage);

            if (CurrentPage < 1)
            {
                CurrentPage = 1;
            }

            if (TotalPages > 0 && CurrentPage > TotalPages)
            {
                CurrentPage = TotalPages;
            }

            Users = rows
                .Skip((CurrentPage - 1) * RowsPerPage)
                .Take(RowsPerPage)
                .ToList();
        }
    }
}