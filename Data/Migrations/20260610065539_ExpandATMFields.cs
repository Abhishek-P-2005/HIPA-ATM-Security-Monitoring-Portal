using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ATMMonitoringWebApp.Data.Migrations
{
    /// <inheritdoc />
    public partial class ExpandATMFields : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Address",
                table: "ATMs",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "BranchEmail",
                table: "ATMs",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "BranchSOLID",
                table: "ATMs",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "DefaultPolicy",
                table: "ATMs",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Location",
                table: "ATMs",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Port",
                table: "ATMs",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "SerialNo",
                table: "ATMs",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Address",
                table: "ATMs");

            migrationBuilder.DropColumn(
                name: "BranchEmail",
                table: "ATMs");

            migrationBuilder.DropColumn(
                name: "BranchSOLID",
                table: "ATMs");

            migrationBuilder.DropColumn(
                name: "DefaultPolicy",
                table: "ATMs");

            migrationBuilder.DropColumn(
                name: "Location",
                table: "ATMs");

            migrationBuilder.DropColumn(
                name: "Port",
                table: "ATMs");

            migrationBuilder.DropColumn(
                name: "SerialNo",
                table: "ATMs");
        }
    }
}
