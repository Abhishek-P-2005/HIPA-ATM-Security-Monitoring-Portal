# HIPA – ATM Security Monitoring and Management Portal

## Project Overview

HIPA (Hitachi Integrated Protection Application) is a web-based ATM Security Monitoring and Management Portal developed as part of a summer industrial internship at **Hitachi Payment Services Pvt. Ltd.**

The application is a full-stack prototype designed to demonstrate ATM record management, terminal security information retrieval, user administration, and database-driven security monitoring through a centralized web interface.

**Internship Duration:** 6 May 2026 – 12 June 2026 (38 calendar days)

## Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** ASP.NET Core Razor Pages, C#
- **Database:** Microsoft SQL Server Express
- **ORM:** Entity Framework Core
- **Authentication:** ASP.NET Core Identity
- **Development Environment:** Microsoft Visual Studio
- **Database Management:** SQL Server Management Studio (SSMS)
- **Additional Technologies:** SMTP and IMemoryCache for email-based OTP verification

## Implemented Features

### 1. User Authentication and Management
- User login and logout using ASP.NET Core Identity
- Password recovery workflow with email-based OTP verification
- User administration, searching, filtering, and role assignment
- CSV export of displayed user records

### 2. SST Management
- Create, Read, Update, and Delete (CRUD) operations for ATM records
- Search and modify terminal information
- SQL Server database integration through Entity Framework Core
- Automatic creation of a default terminal status record when adding an ATM

### 3. SST Status – System Info
- Retrieve terminal-specific information using an ATM ID
- Display connectivity and protection status
- View stored hardware, operating system, security-control, and drive-encryption information

### 4. Dashboard and Security Visualization
- ATM connection and protection status summaries
- TSS security-control statistics
- HDE encryption status visualization
- Unauthorized application and USB alert summaries
- Database-driven dashboard calculations

### 5. Reports Interface
- Sample report entries and report-generation demonstrations
- Demonstration-level CSV download functionality

## Implementation Scope

The completed prototype includes database-integrated user management, ATM CRUD operations, SST Status System Info, and dashboard calculations.

Policy Management, SST Bulk Upload, and certain additional SST Status modules remain frontend prototypes intended for future development. Full database-driven report generation was not implemented.

## Development and Testing

The application was developed and tested locally using representative ATM records stored in Microsoft SQL Server Express.

Functional testing covered authentication, user administration, ATM CRUD operations, database synchronization, terminal status retrieval, dashboard calculations, and demonstration-level reporting.

**Note:** This is an academic internship prototype. It does not connect to live ATM terminals or production banking infrastructure.

## Repository Information

This repository contains the ASP.NET Core application source code, Razor Pages, C# backend components, Entity Framework Core database models, frontend assets, and project configuration.

The local SQL Server database and private SMTP credentials are not included. A compatible SQL Server database and local configuration are required to run the application.

## Internship Organization

**Hitachi Payment Services Pvt. Ltd.**

**Project:** HIPA – ATM Security Monitoring and Management Portal

**Project Type:** Full-Stack Web Application Development

**Purpose:** Summer Industrial Internship – Academic Project Submission
