using System.ComponentModel.DataAnnotations;

namespace ATMMonitoringWebApp.Models
{
    public class ATMStatus
    {
        public int Id { get; set; }

        [Required]
        public string ATMID { get; set; } = "";

        public string TerminalStatus { get; set; } = "Connected";
        public string ProtectionStatus { get; set; } = "Fully Protected";

        public string TerminalIP { get; set; } = "";
        public string NatIP { get; set; } = "";
        public string Location { get; set; } = "";
        public string State { get; set; } = "";
        public string Region { get; set; } = "";

        public string Processor { get; set; } = "";
        public string MotherBoard { get; set; } = "";
        public string RAM { get; set; } = "";
        public string OSName { get; set; } = "";
        public string OSVersion { get; set; } = "";

        public string ClientVersion { get; set; } = "";
        public string PolicyVersion { get; set; } = "";

        public string HIPAProtection { get; set; } = "ON";
        public string CDDVDProtection { get; set; } = "ON";
        public string USBProtection { get; set; } = "ON";
        public string PowerShellProtection { get; set; } = "ON";
        public string AutoRunProtection { get; set; } = "ON";
        public string CommandPromptProtection { get; set; } = "ON";
        public string ControlPanelProtection { get; set; } = "ON";
        public string RegistryProtection { get; set; } = "ON";
        public string GroupPolicyProtection { get; set; } = "ON";
        public string ServicesProtection { get; set; } = "ON";

        public string ComputerName { get; set; } = "";
        public string BIOSVersion { get; set; } = "";
        public string MacAddress { get; set; } = "";
        public string NoOfHDD { get; set; } = "";
        public string HDDSerialNumber { get; set; } = "";
        public string LastHotFix { get; set; } = "";

        public string DriveC_TotalSize { get; set; } = "";
        public string DriveC_UsedSize { get; set; } = "";
        public string DriveC_FreeSize { get; set; } = "";
        public string DriveC_EncryptionStatus { get; set; } = "Fully Encrypted";

        public string DriveD_TotalSize { get; set; } = "";
        public string DriveD_UsedSize { get; set; } = "";
        public string DriveD_FreeSize { get; set; } = "";
        public string DriveD_EncryptionStatus { get; set; } = "Fully Encrypted";

        public string DriveE_TotalSize { get; set; } = "";
        public string DriveE_UsedSize { get; set; } = "";
        public string DriveE_FreeSize { get; set; } = "";
        public string DriveE_EncryptionStatus { get; set; } = "Fully Encrypted";

        public DateTime LastUpdated { get; set; } = DateTime.Now;
    }
}
