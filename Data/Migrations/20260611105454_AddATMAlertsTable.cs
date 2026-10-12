using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ATMMonitoringWebApp.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddATMAlertsTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ATMAlerts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ATMID = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AlertType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AlertMessage = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ATMAlerts", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ATMAlerts");
        }
    }
}
