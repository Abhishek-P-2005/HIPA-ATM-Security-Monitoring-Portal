using ATMMonitoringWebApp.Data;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ATMMonitoringWebApp.Pages
{
    public class DashboardModel : PageModel
    {
        private readonly ApplicationDbContext _context;

        public DashboardModel(ApplicationDbContext context)
        {
            _context = context;
        }

        public int TotalATMs { get; set; }
        public int ConnectedATMs { get; set; }
        public int DisconnectedATMs { get; set; }

        public int FullyProtected { get; set; }
        public int NotProtected { get; set; }

        public int ConnectionPercentage { get; set; }
        public int ProtectionPercentage { get; set; }

        public int HIPAOn { get; set; }
        public int HIPAOff { get; set; }

        public int CDOn { get; set; }
        public int CDOff { get; set; }

        public int USBOn { get; set; }
        public int USBOff { get; set; }

        public int PowerShellOn { get; set; }
        public int PowerShellOff { get; set; }

        public int AutoRunOn { get; set; }
        public int AutoRunOff { get; set; }

        public int CommandPromptOn { get; set; }
        public int CommandPromptOff { get; set; }

        public int ControlPanelOn { get; set; }
        public int ControlPanelOff { get; set; }

        public int RegistryOn { get; set; }
        public int RegistryOff { get; set; }

        public int GroupPolicyOn { get; set; }
        public int GroupPolicyOff { get; set; }

        public int HDEEncrypted { get; set; }
        public int HDEPartiallyEncrypted { get; set; }
        public int HDENotEncrypted { get; set; }

        public int UnauthorizedAppCount { get; set; }
        public int UnauthorizedUSBCount { get; set; }

        public void OnGet()
        {
            TotalATMs = _context.ATMs.Count();

            ConnectedATMs = _context.ATMStatuses
                .Count(x => x.TerminalStatus == "Connected");

            DisconnectedATMs = TotalATMs - ConnectedATMs;

            FullyProtected = _context.ATMStatuses
                .Count(x => x.ProtectionStatus == "Fully Protected");

            NotProtected = TotalATMs - FullyProtected;

            ConnectionPercentage =   TotalATMs == 0 ? 0 : (ConnectedATMs * 100) / TotalATMs;

            ProtectionPercentage =   TotalATMs == 0 ? 0 : (FullyProtected * 100) / TotalATMs;

            HIPAOn = _context.ATMStatuses.Count(x => x.HIPAProtection == "ON");
            HIPAOff = TotalATMs - HIPAOn;

            CDOn = _context.ATMStatuses.Count(x => x.CDDVDProtection == "ON");
            CDOff = TotalATMs - CDOn;

            USBOn = _context.ATMStatuses.Count(x => x.USBProtection == "ON");
            USBOff = TotalATMs - USBOn;

            PowerShellOn = _context.ATMStatuses.Count(x => x.PowerShellProtection == "ON");
            PowerShellOff = TotalATMs - PowerShellOn;

            AutoRunOn = _context.ATMStatuses.Count(x => x.AutoRunProtection == "ON");
            AutoRunOff = TotalATMs - AutoRunOn;

            CommandPromptOn = _context.ATMStatuses.Count(x => x.CommandPromptProtection == "ON");
            CommandPromptOff = TotalATMs - CommandPromptOn;

            ControlPanelOn = _context.ATMStatuses.Count(x => x.ControlPanelProtection == "ON");
            ControlPanelOff = TotalATMs - ControlPanelOn;

            RegistryOn = _context.ATMStatuses.Count(x => x.RegistryProtection == "ON");
            RegistryOff = TotalATMs - RegistryOn;

            GroupPolicyOn = _context.ATMStatuses.Count(x => x.GroupPolicyProtection == "ON");
            GroupPolicyOff = TotalATMs - GroupPolicyOn;


            HDEEncrypted = _context.ATMStatuses.Count(x =>
    x.DriveC_EncryptionStatus == "Fully Encrypted" &&
    x.DriveD_EncryptionStatus == "Fully Encrypted" &&
    x.DriveE_EncryptionStatus == "Fully Encrypted");

            HDEPartiallyEncrypted = _context.ATMStatuses.Count(x =>
                (
                    x.DriveC_EncryptionStatus == "Fully Encrypted" ||
                    x.DriveD_EncryptionStatus == "Fully Encrypted" ||
                    x.DriveE_EncryptionStatus == "Fully Encrypted"
                )
                &&
                !(
                    x.DriveC_EncryptionStatus == "Fully Encrypted" &&
                    x.DriveD_EncryptionStatus == "Fully Encrypted" &&
                    x.DriveE_EncryptionStatus == "Fully Encrypted"
                ));

            HDENotEncrypted = TotalATMs - HDEEncrypted - HDEPartiallyEncrypted;

            // Temporary until separate alert tables are created
            UnauthorizedAppCount = _context.ATMAlerts
                .Count(x => x.AlertType == "Unauthorized App");

            UnauthorizedUSBCount = _context.ATMAlerts
                .Count(x => x.AlertType == "Unauthorized USB");
        }
    }
}