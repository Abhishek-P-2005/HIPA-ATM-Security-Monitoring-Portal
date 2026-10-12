using ATMMonitoringWebApp.Data;
using ATMMonitoringWebApp.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;

namespace ATMMonitoringWebApp.Pages.SSTManagement
{
    [Authorize]
    public class SSTCrudModel : PageModel
    {
        private readonly ApplicationDbContext _context;

        public SSTCrudModel(ApplicationDbContext context)
        {
            _context = context;
        }

        [BindProperty]
        public ATM Input { get; set; } = new();

        public List<ATM> ATMs { get; set; } = new();

        [BindProperty(SupportsGet = true)]
        public string SearchATMID { get; set; } = "";

        public async Task OnGetAsync()
        {
            ATMs = await _context.ATMs
                .OrderBy(a => a.ATMID)
                .ToListAsync();

            if (!string.IsNullOrWhiteSpace(SearchATMID))
            {
                var atm = await _context.ATMs
                    .FirstOrDefaultAsync(a => a.ATMID == SearchATMID.Trim().ToUpper());

                if (atm != null)
                {
                    Input = atm;
                }
            }
        }

        public async Task<IActionResult> OnPostAddAsync()
        {
            if (string.IsNullOrWhiteSpace(Input.ATMID))
            {
                return RedirectToPage();
            }

            Input.ATMID = Input.ATMID.Trim().ToUpper();

            var exists = await _context.ATMs
                .AnyAsync(a => a.ATMID == Input.ATMID);

            if (!exists)
            {
                CleanInput();

                _context.ATMs.Add(Input);

                var defaultStatus = new ATMStatus
                {
                    ATMID = Input.ATMID,

                    TerminalStatus = "Disconnected",
                    ProtectionStatus = "Not Protected",
                    TerminalIP = Input.IP,
                    NatIP = "-",
                    Location = Input.Location,
                    State = Input.State,
                    Region = Input.Zone,

                    Processor = "-",
                    MotherBoard = "-",
                    RAM = "-",
                    OSName = "-",
                    OSVersion = "-",
                    ClientVersion = "-",
                    PolicyVersion = Input.DefaultPolicy,

                    HIPAProtection = "OFF",
                    CDDVDProtection = "OFF",
                    USBProtection = "OFF",
                    PowerShellProtection = "OFF",
                    AutoRunProtection = "OFF",
                    CommandPromptProtection = "OFF",
                    ControlPanelProtection = "OFF",
                    RegistryProtection = "OFF",
                    GroupPolicyProtection = "OFF",
                    ServicesProtection = "OFF",

                    ComputerName = Input.ATMID,
                    BIOSVersion = "-",
                    MacAddress = "-",
                    NoOfHDD = "0",
                    HDDSerialNumber = "-",
                    LastHotFix = "-",

                    DriveC_TotalSize = "0",
                    DriveC_UsedSize = "0",
                    DriveC_FreeSize = "0",
                    DriveC_EncryptionStatus = "Not Encrypted",

                    DriveD_TotalSize = "0",
                    DriveD_UsedSize = "0",
                    DriveD_FreeSize = "0",
                    DriveD_EncryptionStatus = "Not Encrypted",

                    DriveE_TotalSize = "0",
                    DriveE_UsedSize = "0",
                    DriveE_FreeSize = "0",
                    DriveE_EncryptionStatus = "Not Encrypted",

                    LastUpdated = DateTime.Now
                };

                _context.ATMStatuses.Add(defaultStatus);

                await _context.SaveChangesAsync();
            }

            return RedirectToPage();
        }

        public async Task<IActionResult> OnPostEditAsync()
        {
            if (string.IsNullOrWhiteSpace(Input.ATMID))
            {
                return RedirectToPage();
            }

            Input.ATMID = Input.ATMID.Trim().ToUpper();

            var existing = await _context.ATMs
                .FirstOrDefaultAsync(a => a.ATMID == Input.ATMID);

            if (existing != null)
            {
                CleanInput();

                existing.Bank = Input.Bank;
                existing.IP = Input.IP;
                existing.ATMType = Input.ATMType;
                existing.Zone = Input.Zone;
                existing.State = Input.State;
                existing.City = Input.City;
                existing.Manufacturer = Input.Manufacturer;
                existing.Status = Input.Status;

                existing.DefaultPolicy = Input.DefaultPolicy;
                existing.Port = Input.Port;
                existing.Location = Input.Location;
                existing.Address = Input.Address;
                existing.BranchSOLID = Input.BranchSOLID;
                existing.BranchEmail = Input.BranchEmail;
                existing.SerialNo = Input.SerialNo;

                var status = await _context.ATMStatuses
                    .FirstOrDefaultAsync(s => s.ATMID == Input.ATMID);

                if (status != null)
                {
                    status.TerminalIP = Input.IP;
                    status.Location = Input.Location;
                    status.State = Input.State;
                    status.Region = Input.Zone;
                    status.PolicyVersion = Input.DefaultPolicy;
                    status.LastUpdated = DateTime.Now;
                }

                await _context.SaveChangesAsync();
            }

            return RedirectToPage();
        }

        public async Task<IActionResult> OnPostDeleteAsync()
        {
            if (string.IsNullOrWhiteSpace(Input.ATMID))
            {
                return RedirectToPage();
            }

            Input.ATMID = Input.ATMID.Trim().ToUpper();

            var existing = await _context.ATMs
                .FirstOrDefaultAsync(a => a.ATMID == Input.ATMID);

            if (existing != null)
            {
                var status = await _context.ATMStatuses
                    .FirstOrDefaultAsync(s => s.ATMID == Input.ATMID);

                if (status != null)
                {
                    _context.ATMStatuses.Remove(status);
                }

                var alerts = await _context.ATMAlerts
                    .Where(a => a.ATMID == Input.ATMID)
                    .ToListAsync();

                if (alerts.Any())
                {
                    _context.ATMAlerts.RemoveRange(alerts);
                }

                _context.ATMs.Remove(existing);

                await _context.SaveChangesAsync();
            }

            return RedirectToPage();
        }

        private void CleanInput()
        {
            Input.Bank = Input.Bank ?? "";
            Input.IP = Input.IP ?? "";
            Input.ATMType = Input.ATMType ?? "";
            Input.Zone = Input.Zone ?? "";
            Input.State = Input.State ?? "";
            Input.City = Input.City ?? "";
            Input.Manufacturer = Input.Manufacturer ?? "";
            Input.Status = string.IsNullOrWhiteSpace(Input.Status) ? "Active" : Input.Status;

            Input.DefaultPolicy = Input.DefaultPolicy ?? "";
            Input.Port = string.IsNullOrWhiteSpace(Input.Port) ? "2025" : Input.Port;
            Input.Location = Input.Location ?? "";
            Input.Address = Input.Address ?? "";
            Input.BranchSOLID = Input.BranchSOLID ?? "";
            Input.BranchEmail = Input.BranchEmail ?? "";
            Input.SerialNo = Input.SerialNo ?? "";
        }
    }
}