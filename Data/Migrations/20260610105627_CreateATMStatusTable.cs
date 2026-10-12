using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ATMMonitoringWebApp.Data.Migrations
{
    /// <inheritdoc />
    public partial class CreateATMStatusTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ATMStatuses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ATMID = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TerminalStatus = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProtectionStatus = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TerminalIP = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NatIP = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Location = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    State = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Region = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Processor = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MotherBoard = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RAM = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OSName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OSVersion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ClientVersion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PolicyVersion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HIPAProtection = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CDDVDProtection = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    USBProtection = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PowerShellProtection = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AutoRunProtection = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CommandPromptProtection = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ControlPanelProtection = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RegistryProtection = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    GroupPolicyProtection = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ServicesProtection = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ComputerName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BIOSVersion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MacAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NoOfHDD = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HDDSerialNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastHotFix = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DriveC_TotalSize = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DriveC_UsedSize = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DriveC_FreeSize = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DriveC_EncryptionStatus = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DriveD_TotalSize = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DriveD_UsedSize = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DriveD_FreeSize = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DriveD_EncryptionStatus = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DriveE_TotalSize = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DriveE_UsedSize = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DriveE_FreeSize = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DriveE_EncryptionStatus = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastUpdated = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ATMStatuses", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ATMStatuses");
        }
    }
}
