using ATMMonitoringWebApp.Data;
using ATMMonitoringWebApp.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection")
    ?? throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(connectionString));

builder.Services.AddDatabaseDeveloperPageExceptionFilter();

builder.Services.AddDefaultIdentity<ApplicationUser>(options =>
{
    options.SignIn.RequireConfirmedAccount = false;

    options.Password.RequireDigit = true;
    options.Password.RequireLowercase = true;
    options.Password.RequireUppercase = true;
    options.Password.RequireNonAlphanumeric = true;
    options.Password.RequiredLength = 6;
})
.AddRoles<IdentityRole>()
.AddEntityFrameworkStores<ApplicationDbContext>();

builder.Services.AddMemoryCache();
builder.Services.AddScoped<EmailService>();

builder.Services.AddRazorPages(options =>
{
    options.Conventions.AuthorizeFolder("/");

    options.Conventions.AllowAnonymousToAreaPage("Identity", "/Account/Login");
    options.Conventions.AllowAnonymousToAreaPage("Identity", "/Account/VerifyOtp");
    options.Conventions.AllowAnonymousToAreaPage("Identity", "/Account/ForgotPassword");
    options.Conventions.AllowAnonymousToAreaPage("Identity", "/Account/ForgotPasswordConfirmation");
});

var app = builder.Build();

/* CREATE DEFAULT TEST USER */
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    db.Database.Migrate();

    var userManager =
        scope.ServiceProvider.GetRequiredService<UserManager<ApplicationUser>>();
    var roleManager =
    scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();

    string[] roles = { "Super Admin", "Admin", "User", "Guest" };

    foreach (var role in roles)
    {
        if (!await roleManager.RoleExistsAsync(role))
        {
            await roleManager.CreateAsync(new IdentityRole(role));
        }
    }

    string userEmail = "abhishek.prabakar@gmail.com";
    string userPassword = "Abc@123";

    var existingUser = await userManager.FindByEmailAsync(userEmail);

    if (existingUser == null)
    {
        existingUser = new ApplicationUser
        {
            UserName = userEmail,
            Email = userEmail,
            EmailConfirmed = true,
            FullName = "Abhishek Prabakar",
            Status = "Active",
            CreatedDate = DateTime.Now,
            ModifiedDate = DateTime.Now
        };

        var result = await userManager.CreateAsync(existingUser, userPassword);

        if (!result.Succeeded)
        {
            foreach (var error in result.Errors)
            {
                Console.WriteLine("User creation error: " + error.Description);
            }
        }
    }

    if (existingUser != null &&
        !await userManager.IsInRoleAsync(existingUser, "Super Admin"))
    {
        await userManager.AddToRoleAsync(existingUser, "Super Admin");
    }
}

if (app.Environment.IsDevelopment())
{
    app.UseMigrationsEndPoint();
}
else
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapRazorPages();

app.Run();