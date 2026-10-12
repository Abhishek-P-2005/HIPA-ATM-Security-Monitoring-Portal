document.addEventListener("DOMContentLoaded", function () {
    setupButtons();
    setupDeviceFilters();
    setupTabs();
    setupDummyMenuActions();
    setupATMStatusSearch();
});

/* =========================================================
   ATM STATUS DEMO DATA
========================================================= */

const atmStatusData = {
    "TNA001": {
        terminal: "Disconnected",
        encryption: "100%",
        hdeUpdated: "2026-05-22 15:48:15",
        hipaVersion: "3.2.0.8",
        policyVersion: "1031",

        terminalName: "ATM-TNA-01",
        deviceType: "ATM",
        location: "Chennai",
        region: "South",
        state: "Tamil Nadu",
        port: "8002",
        recoveryKey: "889120-440201-772901-119930-882341-221009-771002-445610",
        deviceStatus: "Inactive",

        machine: "ATM-TNA-01",
        os: "Windows 10 IoT LTSC",
        osVersion: "10.0.19044",
        bios: "5.13",
        board: "DURA-H310M",
        mac: "00:04:5F:16:64:98",
        ram: "8 GB",
        ip: "172.19.9.175",
        hdd: "2 Drives",
        protections: {
            hipa: "ON",
            script: "ON",
            usb: "ON",
            powershell: "ON",
            folder: "OFF"
        }
    },

    "ATM-PB-001": {
        terminal: "Connected",
        encryption: "100%",
        hdeUpdated: "2026-05-21 13:11:00",
        hipaVersion: "3.2.0.8",
        policyVersion: "1031",

        terminalName: "HAMR4015IIMIII",
        deviceType: "CRM",
        location: "Amritsar",
        region: "North",
        state: "Punjab",
        port: "8002",
        recoveryKey: "707443-620290-511313-117370-438871-099816-548977-564487",
        deviceStatus: "Active",

        machine: "HARMK051111",
        os: "Windows 10 IoT Enterprise LTSC",
        osVersion: "10.0.19044",
        bios: "5.13",
        board: "DURA-H310M",
        mac: "00:04:5F:16:64:98",
        ram: "8 GB",
        ip: "10.123.9.179",
        hdd: "2 Drives",
        protections: {
            hipa: "ON",
            script: "ON",
            usb: "ON",
            powershell: "OFF",
            folder: "ON"
        }
    },

    "ATM-DL-014": {
        terminal: "Disconnected",
        encryption: "72%",
        hdeUpdated: "2026-05-21 12:48:00",
        hipaVersion: "3.2.0.6",
        policyVersion: "1028",

        terminalName: "ATM-DL-014-PC",
        deviceType: "ATM",
        location: "Delhi",
        region: "North",
        state: "Delhi",
        port: "8002",
        recoveryKey: "332110-551202-992301-770018-112349-660090-881120-224410",
        deviceStatus: "Inactive",

        machine: "ATM-DL-014-PC",
        os: "Windows 10 IoT LTSC",
        osVersion: "10.0.19044",
        bios: "5.11",
        board: "DURA-H310M",
        mac: "00:04:5F:16:71:14",
        ram: "8 GB",
        ip: "10.122.4.108",
        hdd: "2 Drives",
        protections: {
            hipa: "ON",
            script: "ON",
            usb: "OFF",
            powershell: "OFF",
            folder: "ON"
        }
    },

    "ATM-MH-022": {
        terminal: "Connected",
        encryption: "100%",
        hdeUpdated: "2026-05-21 13:05:00",
        hipaVersion: "3.2.0.8",
        policyVersion: "1031",

        terminalName: "ATM-MH-022-PC",
        deviceType: "CRM",
        location: "Mumbai",
        region: "West",
        state: "Maharashtra",
        port: "8002",
        recoveryKey: "220987-441190-551284-338899-774411-112245-662210-908871",
        deviceStatus: "Active",

        machine: "ATM-MH-022-PC",
        os: "Windows 10 IoT Enterprise LTSC",
        osVersion: "10.0.19045",
        bios: "5.14",
        board: "DURA-H310M",
        mac: "00:04:5F:16:82:22",
        ram: "16 GB",
        ip: "10.121.8.221",
        hdd: "3 Drives",
        protections: {
            hipa: "ON",
            script: "ON",
            usb: "ON",
            powershell: "ON",
            folder: "ON"
        }
    },

    "ATM-TN-031": {
        terminal: "Connected",
        encryption: "100%",
        hdeUpdated: "2026-05-21 13:09:00",
        hipaVersion: "3.2.0.8",
        policyVersion: "1031",

        terminalName: "ATM-TN-031-PC",
        deviceType: "ATM",
        location: "Chennai",
        region: "South",
        state: "Tamil Nadu",
        port: "8002",
        recoveryKey: "998001-441102-337710-882309-550018-773210-119902-440087",
        deviceStatus: "Active",

        machine: "ATM-TN-031-PC",
        os: "Windows 11 IoT Enterprise",
        osVersion: "10.0.22631",
        bios: "5.15",
        board: "DURA-H310M",
        mac: "00:04:5F:16:90:31",
        ram: "8 GB",
        ip: "10.120.7.144",
        hdd: "2 Drives",
        protections: {
            hipa: "ON",
            script: "ON",
            usb: "ON",
            powershell: "ON",
            folder: "ON"
        }
    },

    "ATM-WB-008": {
        terminal: "Disconnected",
        encryption: "45%",
        hdeUpdated: "2026-05-21 11:32:00",
        hipaVersion: "3.1.9.4",
        policyVersion: "1015",

        terminalName: "ATM-WB-008-PC",
        deviceType: "CRM",
        location: "Kolkata",
        region: "East",
        state: "West Bengal",
        port: "8002",
        recoveryKey: "661100-772201-449982-335501-880023-110985-665509-229900",
        deviceStatus: "Inactive",

        machine: "ATM-WB-008-PC",
        os: "Windows 10 IoT LTSC",
        osVersion: "10.0.17763",
        bios: "5.09",
        board: "DURA-H310M",
        mac: "00:04:5F:16:68:08",
        ram: "4 GB",
        ip: "10.119.6.091",
        hdd: "1 Drive",
        protections: {
            hipa: "ON",
            script: "OFF",
            usb: "OFF",
            powershell: "OFF",
            folder: "OFF"
        }
    }
};

/* =========================================================
   BUTTON ACTIONS
========================================================= */

function setupButtons() {
    document.querySelectorAll("button, .table-link, .small-action-btn").forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            const text = btn.innerText.trim().toLowerCase();

            if (text.includes("download")) {
                e.preventDefault();
                downloadCSV();
            }

            else if (text.includes("generate report")) {
                generateReport();
            }

            else if (text.includes("add device")) {
                addDummyDevice();
            }

            else if (text === "retry") {
                showToast("Report retry started successfully.");
            }
        });
    });
}

/* =========================================================
   DROPDOWN DEMO ACTIONS
========================================================= */

function setupDummyMenuActions() {
    document.querySelectorAll(".dummy-action").forEach(function (item) {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            showToast(item.innerText.trim() + " module opened in demo mode.");
        });
    });
}

/* =========================================================
   ATM STATUS SEARCH
========================================================= */

function setupATMStatusSearch() {
    const page = window.location.pathname.toLowerCase();

    if (!page.includes("atmstatus")) {
        return;
    }

    const searchInput = document.getElementById("atmStatusSearch");
    const searchBtn = document.getElementById("atmSearchBtn");
    const clearBtn = document.getElementById("atmClearBtn");

    if (!searchInput || !searchBtn) {
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const atmFromUrl = urlParams.get("atmId");

    if (atmFromUrl && atmStatusData[atmFromUrl.toUpperCase()]) {
        searchInput.value = atmFromUrl.toUpperCase();
        loadATMStatus(atmFromUrl.toUpperCase());
    } else {
        searchInput.value = "TNA001";
        loadATMStatus("TNA001");
    }

    searchBtn.onclick = function () {
        const atmId = searchInput.value.trim().toUpperCase();

        if (!atmStatusData[atmId]) {
            showToast("ATM ID not found in demo data.");
            return;
        }

        loadATMStatus(atmId);
        showToast(atmId + " status loaded successfully.");
    };

    searchInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            searchBtn.click();
        }
    });

    if (clearBtn) {
        clearBtn.onclick = function () {
            searchInput.value = "TNA001";
            loadATMStatus("TNA001");
            showToast("ATM Status reset to TNA001.");
        };
    }
}

/* =========================================================
   ATM STATUS DATA LOAD
========================================================= */

function loadATMStatus(atmId) {
    const d = atmStatusData[atmId];

    if (!d) {
        return;
    }

    setText("tssAtmId", atmId);
    setText("encryptionStatus", d.encryption);
    setText("hdeUpdated", d.hdeUpdated);
    setText("hipaVersion", d.hipaVersion);
    setText("policyVersion", d.policyVersion);
    setText("lastConnected", d.hdeUpdated);

    setStatusText("terminalStatus", d.terminal);
    setStatusText("hipaProtection", d.protections.hipa);
    setStatusText("scriptProtection", d.protections.script);
    setStatusText("usbProtection", d.protections.usb);
    setStatusText("powershellProtection", d.protections.powershell);
    setStatusText("folderProtection", d.protections.folder);

    setText("sysAtmId", atmId);
    setText("sysMachine", d.machine);
    setText("sysLocation", d.location);
    setText("sysRegion", d.region);
    setText("sysOs", d.os);
    setText("sysRam", d.ram);
    setText("sysIp", d.ip);
    setText("sysHdd", d.hdd);
    setText("sysOsVersion", d.osVersion);
    setText("sysBios", d.bios);
    setText("sysBoard", d.board);
    setText("sysMac", d.mac);

    /* Mini Terminal Header */
    setText("terminalName", d.terminalName);
    setText("terminalLocation", d.location);
    setText("terminalState", d.state);
    setText("terminalRegion", d.region);
    setText("terminalIp", d.ip);
    setStatusText("terminalDeviceStatus", d.deviceStatus);

    loadPolicyRows(atmId);
    loadBlockedRows(atmId);
    loadPatchRows(atmId);
    loadUsbRows(atmId);
    loadVolumeRows(atmId);
}

function setText(id, value) {
    const el = document.getElementById(id);

    if (el) {
        el.innerText = value;
    }
}

function setStatusText(id, value) {
    const el = document.getElementById(id);

    if (!el) {
        return;
    }

    el.innerText = value;
    el.classList.remove("success-text", "danger-text");

    const v = value.toLowerCase();

    if (v === "on" || v === "connected" || v === "active") {
        el.classList.add("success-text");
    } else {
        el.classList.add("danger-text");
    }
}

/* =========================================================
   ATM STATUS TAB TABLE LOADERS
========================================================= */

function loadPolicyRows(atmId) {
    const tbody = document.getElementById("policyRows");

    if (!tbody) {
        return;
    }

    const d = atmStatusData[atmId];

    tbody.innerHTML = `
        <tr>
            <td>${d.policyVersion}</td>
            <td>2026-05-20 10:38:59</td>
            <td>${d.hdeUpdated}</td>
        </tr>
        <tr>
            <td>1048</td>
            <td>2026-04-29 15:36:06</td>
            <td>2026-05-20 11:20:00</td>
        </tr>
    `;
}

function loadBlockedRows(atmId) {
    const tbody = document.getElementById("blockedRows");

    if (!tbody) {
        return;
    }

    tbody.innerHTML = `
        <tr>
            <td>${atmId}</td>
            <td>powershell.exe</td>
            <td>Unauthorized Script Execution</td>
            <td>2026-05-22 14:20:00</td>
            <td><span class="badge badge-offline">Blocked</span></td>
        </tr>
        <tr>
            <td>${atmId}</td>
            <td>unknown_usb_tool.exe</td>
            <td>External USB Tool</td>
            <td>2026-05-22 12:10:00</td>
            <td><span class="badge badge-warning">Review</span></td>
        </tr>
    `;
}

function loadPatchRows(atmId) {
    const tbody = document.getElementById("patchRows");

    if (!tbody) {
        return;
    }

    tbody.innerHTML = `
        <tr>
            <td>KB5039211</td>
            <td>Windows Security Update for ${atmId}</td>
            <td>2026-05-20</td>
            <td><span class="badge badge-online">Installed</span></td>
        </tr>
        <tr>
            <td>KB5037768</td>
            <td>.NET Security Update</td>
            <td>2026-05-18</td>
            <td><span class="badge badge-warning">Pending Review</span></td>
        </tr>
    `;
}

function loadUsbRows(atmId) {
    const tbody = document.getElementById("usbRows");

    if (!tbody) {
        return;
    }

    tbody.innerHTML = `
        <tr>
            <td>${atmId}</td>
            <td>SanDisk USB Drive</td>
            <td>2026-05-22 13:10:11</td>
            <td><span class="badge badge-warning">Approval Required</span></td>
        </tr>
        <tr>
            <td>${atmId}</td>
            <td>Kingston DataTraveler</td>
            <td>2026-05-21 09:24:30</td>
            <td><span class="badge badge-online">Approved</span></td>
        </tr>
    `;
}

function loadVolumeRows(atmId) {
    const tbody = document.getElementById("volumeRows");

    if (!tbody) {
        return;
    }

    tbody.innerHTML = `
        <tr>
            <td>D:</td>
            <td>466.1 GB</td>
            <td>72.8 GB</td>
            <td>393.3 GB</td>
            <td><span class="badge badge-secure">Fully Encrypted</span></td>
            <td>Unlocked</td>
            <td>Automatic Enabled</td>
            <td>204621A8BC</td>
        </tr>
        <tr>
            <td>E:</td>
            <td>931.5 GB</td>
            <td>30.6 GB</td>
            <td>901.2 GB</td>
            <td><span class="badge badge-secure">Fully Encrypted</span></td>
            <td>Unlocked</td>
            <td>Automatic Enabled</td>
            <td>2052AA43C0</td>
        </tr>
        <tr>
            <td>C:</td>
            <td>80.6 GB</td>
            <td>39.2 GB</td>
            <td>41.4 GB</td>
            <td><span class="badge badge-secure">Fully Encrypted</span></td>
            <td>Unlocked</td>
            <td>Automatic Enabled</td>
            <td>204621A8DC</td>
        </tr>
    `;
}

/* =========================================================
   TABS
========================================================= */

function setupTabs() {
    document.querySelectorAll(".tab-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
            document.querySelectorAll(".tab-btn").forEach(function (b) {
                b.classList.remove("active");
            });

            document.querySelectorAll(".tab-content").forEach(function (c) {
                c.classList.remove("active");
            });

            btn.classList.add("active");

            const tabId = btn.getAttribute("data-tab");
            const target = document.getElementById(tabId);

            if (target) {
                target.classList.add("active");
            }
        });
    });
}

/* =========================================================
   DEVICES PAGE FILTERS
========================================================= */

function setupDeviceFilters() {
    const page = window.location.pathname.toLowerCase();

    if (!page.includes("devices")) {
        return;
    }

    const searchBox = document.querySelector(".device-toolbar input");
    const selects = document.querySelectorAll(".device-toolbar select");

    if (!searchBox || selects.length < 2) {
        return;
    }

    searchBox.oninput = filterDevices;
    selects[0].onchange = filterDevices;
    selects[1].onchange = filterDevices;
}

function filterDevices() {
    const searchBox = document.querySelector(".device-toolbar input");
    const selects = document.querySelectorAll(".device-toolbar select");

    if (!searchBox || selects.length < 2) {
        return;
    }

    const search = searchBox.value.toLowerCase().trim();
    const region = selects[0].value.toLowerCase().trim();
    const status = selects[1].value.toLowerCase().trim();

    const rows = document.querySelectorAll(".dashboard-table tbody tr");

    rows.forEach(function (row) {
        const rowText = row.innerText.toLowerCase();

        let show = true;

        if (search !== "" && !rowText.includes(search)) {
            show = false;
        }

        if (region !== "all regions" && !rowText.includes(region)) {
            show = false;
        }

        if (status !== "all status" && !rowText.includes(status)) {
            show = false;
        }

        row.style.display = show ? "" : "none";
    });
}

/* =========================================================
   ADD DUMMY DEVICE
========================================================= */

function addDummyDevice() {
    const page = window.location.pathname.toLowerCase();

    if (!page.includes("devices")) {
        showToast("Add Device is available from the Devices page.");
        return;
    }

    const table = document.querySelector(".dashboard-table tbody");

    if (!table) {
        showToast("Device table not found.");
        return;
    }

    const randomNo = Math.floor(100 + Math.random() * 899);
    const atmId = "ATM-KA-" + randomNo;

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${atmId}</td>
        <td>CRM</td>
        <td>Bengaluru</td>
        <td>Karnataka</td>
        <td>South</td>
        <td>10.118.5.${randomNo}</td>
        <td><span class="badge badge-online">Online</span></td>
        <td>Fully Encrypted</td>
        <td>${new Date().toLocaleString()}</td>
        <td><a class="table-link" href="/ATMStatus?atmId=${atmId}">View</a></td>
    `;

    table.prepend(row);

    atmStatusData[atmId] = {
        terminal: "Connected",
        encryption: "100%",
        hdeUpdated: new Date().toLocaleString(),
        hipaVersion: "3.2.0.8",
        policyVersion: "1031",

        terminalName: atmId + "-PC",
        deviceType: "CRM",
        location: "Bengaluru",
        region: "South",
        state: "Karnataka",
        port: "8002",
        recoveryKey: "AUTO-KEY-" + randomNo + "-TEMP-DEMO-RECOVERY-KEY",
        deviceStatus: "Active",

        machine: atmId + "-PC",
        os: "Windows 10 IoT Enterprise LTSC",
        osVersion: "10.0.19044",
        bios: "5.13",
        board: "DURA-H310M",
        mac: "00:04:5F:16:KA:" + randomNo.toString().slice(-2),
        ram: "8 GB",
        ip: "10.118.5." + randomNo,
        hdd: "2 Drives",
        protections: {
            hipa: "ON",
            script: "ON",
            usb: "ON",
            powershell: "ON",
            folder: "ON"
        }
    };

    setupButtons();
    setupDeviceFilters();

    showToast(atmId + " added successfully.");
}

/* =========================================================
   REPORT GENERATION
========================================================= */

function generateReport() {
    const page = window.location.pathname.toLowerCase();

    if (!page.includes("reports")) {
        showToast("Report generation is available from the Reports page.");
        return;
    }

    const table = document.querySelector(".dashboard-table tbody");

    if (!table) {
        showToast("Report table not found.");
        return;
    }

    const reportId = "RPT-" + Math.floor(1000 + Math.random() * 9000);

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${reportId}</td>
        <td>New Dummy Generated Report</td>
        <td>admin@atm.com</td>
        <td>${new Date().toLocaleString()}</td>
        <td>CSV</td>
        <td><span class="badge badge-online">Completed</span></td>
        <td><a class="table-link" href="#">Download</a></td>
    `;

    table.prepend(row);

    setupButtons();

    showToast("Dummy report generated successfully.");
}

/* =========================================================
   DOWNLOAD CSV
========================================================= */

function downloadCSV() {
    const page = window.location.pathname.toLowerCase();

    let filename = "ATM_Report.csv";
    let csv = "";

    if (page.includes("atmstatus")) {
        const atmId =
            document.getElementById("atmStatusSearch")?.value.trim().toUpperCase() || "TNA001";

        const d = atmStatusData[atmId] || atmStatusData["TNA001"];

        filename = atmId + "_ATM_Status_Report.csv";

        csv =
            "Field,Value\n" +
            `ATM ID,${atmId}\n` +
            `Terminal Name,${d.terminalName}\n` +
            `Device Status,${d.deviceStatus}\n` +
            `Terminal Status,${d.terminal}\n` +
            `Encryption Status,${d.encryption}\n` +
            `HIPA Version,${d.hipaVersion}\n` +
            `Policy Version,${d.policyVersion}\n` +
            `Location,${d.location}\n` +
            `Region,${d.region}\n` +
            `State,${d.state}\n` +
            `IP Address,${d.ip}\n` +
            `OS,${d.os}\n` +
            `RAM,${d.ram}\n`;
    }

    else if (page.includes("dashboard")) {
        filename = "Dashboard_Report.csv";
        csv =
            "Metric,Value\n" +
            "Total Devices,3570\n" +
            "Connected,3091\n" +
            "Disconnected,479\n" +
            "Encrypted,3282\n" +
            "Active Alerts,4";
    }

    else if (page.includes("devices")) {
        filename = "Device_List.csv";
        csv =
            "ATM ID,Device Type,Location,State,Region,IP Address,Status,Encryption,Last Updated\n" +
            "ATM-PB-001,CRM,Amritsar,Punjab,North,10.123.9.179,Online,Fully Encrypted,21-05-2026 13:11\n" +
            "ATM-DL-014,ATM,Delhi,Delhi,North,10.122.4.108,Offline,Partially Encrypted,21-05-2026 12:48\n" +
            "ATM-MH-022,CRM,Mumbai,Maharashtra,West,10.121.8.221,Online,Fully Encrypted,21-05-2026 13:05\n" +
            "ATM-TN-031,ATM,Chennai,Tamil Nadu,South,10.120.7.144,Online,Fully Encrypted,21-05-2026 13:09\n" +
            "ATM-WB-008,CRM,Kolkata,West Bengal,East,10.119.6.091,Offline,Not Encrypted,21-05-2026 11:32";
    }

    else if (page.includes("hipastatus")) {
        filename = "HIPA_Status_Report.csv";
        csv =
            "Module,ON,OFF,Total,Status\n" +
            "HIPA Protection,3090,480,3570,Active\n" +
            "Script Protection,3055,515,3570,Active\n" +
            "CD/DVD ROM Protection,2978,592,3570,Active\n" +
            "USB Protection,3102,468,3570,Active\n" +
            "Registry Protection,3022,548,3570,Active\n" +
            "PowerShell Protection,2864,706,3570,Review\n" +
            "Command Prompt Protection,2890,680,3570,Review\n" +
            "KSE Encryption,3282,288,3570,Secured";
    }

    else if (page.includes("reports")) {
        filename = "Generated_Report.csv";
        csv =
            "Report ID,Report Name,Generated By,Generated Time,Format,Status\n" +
            "RPT-1001,Device Connectivity Report,admin@atm.com,21-05-2026 13:20,CSV,Completed\n" +
            "RPT-1002,Encryption Status Report,admin@atm.com,21-05-2026 12:45,Excel,Completed\n" +
            "RPT-1003,HIPA Protection Report,admin@atm.com,21-05-2026 11:50,PDF,Processing\n" +
            "RPT-1004,Hardware Inventory Report,admin@atm.com,21-05-2026 10:30,CSV,Failed";
    }

    else {
        filename = "ATM_Monitoring_Export.csv";
        csv = "Message\nATM Monitoring Web App Dummy Export";
    }

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();

    showToast(filename + " downloaded successfully.");
}

/* =========================================================
   TOAST
========================================================= */

function showToast(message) {
    const oldToast = document.querySelector(".custom-toast");

    if (oldToast) {
        oldToast.remove();
    }

    const toast = document.createElement("div");
    toast.className = "custom-toast";
    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(function () {
        toast.remove();
    }, 2500);
}

/* =========================================================
   SST STATUS PAGE
========================================================= */

const sstData = {
    "CAS2CHN01": {
        terminalId: "CAS2CHN01",
        terminalIp: "172.19.9.174",
        natIp: "10.10.100.120",
        location: "Test Lab",
        state: "Tamil Nadu",
        region: "South",
        lastModified: "29-05-2026 10:00:01",
        terminalStatus: "Connected",
        processor: "Intel(R) Core(TM) i5-9500TE CPU @@ 2.20GHz",
        motherBoard: "DURGA-H31(DAH31-027)",
        ram: "8GB",
        osName: "Microsoft Windows 10 IoT Enterprise LTSC",
        osVersion: "1098",
        clientVersion: "3.2.0.8",
        policyVersion: "1031",
        protectionStatus: "Fully Protected",
        computerName: "CAS2CHN01",
        biosVersion: "5.13",
        macAddress: "00:04:5F:15:64:98, 00:04:5F:15:64:99",
        noOfHdd: "2",
        hddSerial: "20152LAH91XG, 20482L1A6BCX",
        lastHotFix: "KB5004331",
        drives: [
            ["C:", "60.5", "29.2", "31.4", "Fully Encrypted"],
            ["D:", "416.1", "22.8", "393.3", "Fully Encrypted"],
            ["E:", "953.9", "30.1", "923.8", "Fully Encrypted"]
        ]
    },

    "TNA001": {
        terminalId: "TNA001",
        terminalIp: "172.19.9.175",
        natIp: "10.10.100.121",
        location: "Chennai",
        state: "Tamil Nadu",
        region: "South",
        lastModified: "29-05-2026 09:45:10",
        terminalStatus: "Disconnected",
        processor: "Intel(R) Core(TM) i5 CPU",
        motherBoard: "DURGA-H31",
        ram: "8GB",
        osName: "Microsoft Windows 10 IoT Enterprise LTSC",
        osVersion: "1098",
        clientVersion: "3.2.0.8",
        policyVersion: "1031",
        protectionStatus: "Partially Protected",
        computerName: "ATM-TNA-01",
        biosVersion: "5.13",
        macAddress: "00:04:5F:16:64:98",
        noOfHdd: "2",
        hddSerial: "204621A8BC, 2052AA43C0",
        lastHotFix: "KB5004331",
        drives: [
            ["C:", "80.6", "41.4", "39.2", "Fully Encrypted"],
            ["D:", "466.1", "393.3", "72.8", "Fully Encrypted"],
            ["E:", "931.5", "901.2", "30.6", "Fully Encrypted"]
        ]
    }
};
/*
document.addEventListener("DOMContentLoaded", function () {
    setupSSTTabs();
    // setupSSTSearch();
    
});
*/
function setupSSTTabs() {
    document.querySelectorAll(".sst-tab-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
            document.querySelectorAll(".sst-tab-btn").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".sst-tab-content").forEach(c => c.classList.remove("active"));

            btn.classList.add("active");

            const tabId = btn.getAttribute("data-tab");
            const target = document.getElementById(tabId);

            if (target) {
                target.classList.add("active");
            }
        });
    });
}

function setupSSTSearch() {
    const input = document.getElementById("sstSearchInput");
    const btn = document.getElementById("sstSearchBtn");

    if (!input || !btn) {
        return;
    }

    loadSSTData("CAS2CHN01");

    btn.onclick = function () {
        const id = input.value.trim().toUpperCase();

        if (!sstData[id]) {
            showToast("Terminal ID not found.");
            return;
        }

        loadSSTData(id);
        showToast(id + " loaded successfully.");
    };

    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            btn.click();
        }
    });
}

function loadSSTData(id) {
    const d = sstData[id];

    if (!d) return;

    setTextOrValue("sstTerminalId", d.terminalId);
    setTextOrValue("sstTerminalIp", d.terminalIp);
    setTextOrValue("sstNatIp", d.natIp);
    setTextOrValue("sstLocation", d.location);
    setTextOrValue("sstState", d.state);
    setTextOrValue("sstRegion", d.region);
    setTextOrValue("sstLastModified", d.lastModified);
    setTextOrValue("sstLastUpdated", d.lastModified);

    setTextOrValue("terminalStatus", d.terminalStatus);
    setTextOrValue("processor", d.processor);
    setTextOrValue("motherBoard", d.motherBoard);
    setTextOrValue("ram", d.ram);
    setTextOrValue("osName", d.osName);
    setTextOrValue("osVersion", d.osVersion);
    setTextOrValue("clientVersion", d.clientVersion);
    setTextOrValue("policyVersion", d.policyVersion);

    setTextOrValue("protectionStatus", d.protectionStatus);
    setTextOrValue("computerName", d.computerName);
    setTextOrValue("biosVersion", d.biosVersion);
    setTextOrValue("macAddress", d.macAddress);
    setTextOrValue("noOfHdd", d.noOfHdd);
    setTextOrValue("hddSerial", d.hddSerial);
    setTextOrValue("lastHotFix", d.lastHotFix);

    loadSSTDriveRows(d.drives);
}

function loadSSTDriveRows(drives) {
    const driveRows = document.getElementById("driveRows");
    const hdeRows = document.getElementById("hdeRows");

    if (driveRows) {
        driveRows.innerHTML = drives.map(d => `
            <tr>
                <td>${d[0]}</td>
                <td>${d[1]}</td>
                <td>${d[2]}</td>
                <td>${d[3]}</td>
                <td>${d[4]}</td>
            </tr>
        `).join("");
    }

    if (hdeRows) {
        hdeRows.innerHTML = drives.map(d => `
            <tr>
                <td>${d[0]}</td>
                <td>${d[1]}</td>
                <td>${d[2]}</td>
                <td>${d[3]}</td>
                <td>${d[4]}</td>
            </tr>
        `).join("");
    }
}

function setTextOrValue(id, value) {
    const el = document.getElementById(id);

    if (!el) return;

    if ("value" in el) {
        el.value = value;
    } else {
        el.innerText = value;
    }
}

// Dashboard download button
document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.querySelector(".dashboard-fixed-download");

    if (downloadBtn) {
        downloadBtn.addEventListener("click", function () {
            window.print();
        });
    }
});

/* =========================================================
   USER MANAGEMENT - USERS
========================================================= */

let currentUserPage = 1;

let defaultUsers = [
    {
        id: "U001",
        fullName: "John Smith",
        email: "john.smith@gmail.com",
        username: "jonny77",
        status: "Active",
        role: "Admin",
        createdDate: "2023-03-12",
        modifiedDate: "2026-06-02"
    },
    {
        id: "U002",
        fullName: "Olivia Bennett",
        email: "ollyben@gmail.com",
        username: "olly659",
        status: "Inactive",
        role: "User",
        createdDate: "2022-06-27",
        modifiedDate: "2026-06-02"
    },
    {
        id: "U003",
        fullName: "Daniel Warren",
        email: "dwarren3@gmail.com",
        username: "dwarren3",
        status: "Banned",
        role: "User",
        createdDate: "2024-01-08",
        modifiedDate: "2026-06-02"
    },
    {
        id: "U004",
        fullName: "Chloe Hayes",
        email: "chloehye@gmail.com",
        username: "chloehh",
        status: "Pending",
        role: "Guest",
        createdDate: "2021-10-05",
        modifiedDate: "2026-06-02"
    },
    {
        id: "U005",
        fullName: "Marcus Reed",
        email: "reeds777@gmail.com",
        username: "reeds7",
        status: "Suspended",
        role: "User",
        createdDate: "2023-02-19",
        modifiedDate: "2026-06-02"
    }
];

function todayDateValue() {
    return new Date().toISOString().split("T")[0];
}

function getUsers() {
    let data = localStorage.getItem("hipaUsers");

    if (!data) {
        localStorage.setItem("hipaUsers", JSON.stringify(defaultUsers));
        return defaultUsers;
    }

    let users = JSON.parse(data);

    users = users.map((u, index) => {
        return {
            id: u.id || "U" + Date.now() + index,
            fullName: u.fullName || "",
            email: u.email || "",
            username: u.username || "",
            status: u.status || "Active",
            role: u.role || "User",
            createdDate: u.createdDate || u.joinedDate || todayDateValue(),
            modifiedDate: u.modifiedDate || u.joinedDate || todayDateValue()
        };
    });

    saveUsers(users);
    return users;
}

function saveUsers(users) {
    localStorage.setItem("hipaUsers", JSON.stringify(users));
}

function formatUserDate(dateValue) {
    if (!dateValue) return "-";

    return new Date(dateValue).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}

function getFilteredUsers() {
    let users = getUsers();

    const searchEl = document.getElementById("userSearch");
    const roleEl = document.getElementById("roleFilter");
    const statusEl = document.getElementById("statusFilter");
    const dateEl = document.getElementById("dateFilter");

    const search = searchEl ? searchEl.value.toLowerCase() : "";
    const role = roleEl ? roleEl.value : "";
    const status = statusEl ? statusEl.value : "";
    const date = dateEl ? dateEl.value : "";

    users = users.filter(u =>
        (
            u.fullName.toLowerCase().includes(search) ||
            u.email.toLowerCase().includes(search) ||
            u.username.toLowerCase().includes(search)
        ) &&
        (role === "" || u.role === role) &&
        (status === "" || u.status === status)
    );

    if (date === "newest") {
        users.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
    }

    if (date === "oldest") {
        users.sort((a, b) => new Date(a.createdDate) - new Date(b.createdDate));
    }

    if (date === "modifiedNewest") {
        users.sort((a, b) => new Date(b.modifiedDate) - new Date(a.modifiedDate));
    }

    return users;
}

function renderUsers() {
    const table = document.getElementById("usersTableBody");
    if (!table) return;

    const rowsPerPageEl = document.getElementById("rowsPerPage");
    const rowsPerPage = rowsPerPageEl ? parseInt(rowsPerPageEl.value) : 10;

    let users = getFilteredUsers();

    const totalPages = Math.ceil(users.length / rowsPerPage);

    if (currentUserPage > totalPages) {
        currentUserPage = totalPages || 1;
    }

    const start = (currentUserPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    const pagedUsers = users.slice(start, end);

    table.innerHTML = "";

    pagedUsers.forEach(u => {
        table.innerHTML += `
            <tr>
                <td>${u.fullName}</td>
                <td>${u.email}</td>
                <td>${u.username}</td>
                <td><span class="status-pill ${u.status.toLowerCase()}">${u.status}</span></td>
                <td>${u.role}</td>
                <td>${formatUserDate(u.createdDate)}</td>
                <td>${formatUserDate(u.modifiedDate)}</td>
                <td>
                    <button class="um-edit" onclick="editUser('${u.id}')">✎</button>
                    <button class="um-delete" onclick="deleteUser('${u.id}')">🗑</button>
                </td>
            </tr>
        `;
    });

    const countText = document.getElementById("userCountText");

    if (countText) {
        countText.innerText = `of ${users.length} users`;
    }

    renderPaginationButtons(totalPages);
}

function renderPaginationButtons(totalPages) {
    const container = document.getElementById("paginationButtons");
    if (!container) return;

    container.innerHTML = "";

    if (totalPages <= 1) return;

    const prevBtn = document.createElement("button");
    prevBtn.innerText = "‹";
    prevBtn.disabled = currentUserPage === 1;
    prevBtn.onclick = function () {
        currentUserPage--;
        renderUsers();
    };
    container.appendChild(prevBtn);

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.innerText = i;

        if (i === currentUserPage) {
            btn.classList.add("active-page-btn");
        }

        btn.onclick = function () {
            currentUserPage = i;
            renderUsers();
        };

        container.appendChild(btn);
    }

    const nextBtn = document.createElement("button");
    nextBtn.innerText = "›";
    nextBtn.disabled = currentUserPage === totalPages;
    nextBtn.onclick = function () {
        currentUserPage++;
        renderUsers();
    };
    container.appendChild(nextBtn);
}

function editUser(userId) {
    localStorage.setItem("editUserId", userId);
    window.location.href = "/UserManagement/UserForm";
}

function deleteUser(userId) {
    if (!confirm("Delete this user?")) return;

    let users = getUsers();
    users = users.filter(u => u.id !== userId);

    saveUsers(users);
    renderUsers();
}

function exportUsers() {
    const users = getFilteredUsers();

    let csv = "Full Name,Email,Username,Status,Role,Created Date,Modified Date\n";

    users.forEach(u => {
        csv += `${u.fullName},${u.email},${u.username},${u.status},${u.role},${u.createdDate},${u.modifiedDate}\n`;
    });

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "HIPA_Users_Report.csv";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function loadUserForm() {
    const form = document.getElementById("userForm");
    if (!form) return;

    const editUserId = localStorage.getItem("editUserId");

    if (editUserId) {
        const users = getUsers();
        const user = users.find(u => u.id === editUserId);

        if (user) {
            document.getElementById("formTitle").innerText = "Edit User";
            document.getElementById("editUserId").value = user.id;
            document.getElementById("fullName").value = user.fullName;
            document.getElementById("email").value = user.email;
            document.getElementById("username").value = user.username;
            document.getElementById("status").value = user.status;
            document.getElementById("role").value = user.role;
        }
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let users = getUsers();

        const editId = document.getElementById("editUserId").value;

        const userData = {
            id: editId || "U" + Date.now(),
            fullName: document.getElementById("fullName").value,
            email: document.getElementById("email").value,
            username: document.getElementById("username").value,
            status: document.getElementById("status").value,
            role: document.getElementById("role").value,
            createdDate: todayDateValue(),
            modifiedDate: todayDateValue()
        };

        if (editId) {
            const existingUser = users.find(u => u.id === editId);

            userData.createdDate = existingUser.createdDate;
            userData.modifiedDate = todayDateValue();

            users = users.map(u => u.id === editId ? userData : u);
            localStorage.removeItem("editUserId");
        } else {
            users.push(userData);
        }

        saveUsers(users);
        window.location.href = "/UserManagement/Users";
    });
}

document.addEventListener("DOMContentLoaded", function () {
    renderUsers();
    loadUserForm();

    ["userSearch", "roleFilter", "statusFilter", "dateFilter"].forEach(id => {
        const el = document.getElementById(id);

        if (el) {
            el.addEventListener("input", function () {
                currentUserPage = 1;
                renderUsers();
            });

            el.addEventListener("change", function () {
                currentUserPage = 1;
                renderUsers();
            });
        }
    });

    const rowsPerPage = document.getElementById("rowsPerPage");

    if (rowsPerPage) {
        rowsPerPage.addEventListener("change", function () {
            currentUserPage = 1;
            renderUsers();
        });
    }

    const exportBtn = document.getElementById("exportUsersBtn");

    if (exportBtn) {
        exportBtn.addEventListener("click", exportUsers);
    }
});

/* =========================================================
ROLE ACCESS CONTROL
========================================================= */

const hipaAccessModules = [
    { module: "Dashboard", page: "/Dashboard" },
    { module: "User Management", page: "/UserManagement/Users" },
    { module: "Policy Management", page: "#" },
    { module: "SST Management", page: "#" },
    { module: "Reports", page: "/Reports" },
    { module: "SST Status", page: "/ATMStatus" }
];

function getDefaultRoleAccess(role) {
    return hipaAccessModules.map(m => {
        if (role === "Super Admin") return { ...m, menuView: true };
        if (role === "Admin") return { ...m, menuView: true };
        if (role === "User") {
            return {
                ...m,
                menuView: m.module === "Dashboard" || m.module === "SST Status"
            };
        }
        return {
            ...m,
            menuView: m.module === "Dashboard"
        };
    });
}

function getRoleAccess(role) {
    const key = "hipaRoleAccess_" + role;
    const saved = localStorage.getItem(key);

    if (saved) return JSON.parse(saved);

    const defaults = getDefaultRoleAccess(role);
    localStorage.setItem(key, JSON.stringify(defaults));
    return defaults;
}

function saveRoleAccess(role, permissions) {
    localStorage.setItem("hipaRoleAccess_" + role, JSON.stringify(permissions));
}

function renderRoleAccess() {
    const body = document.getElementById("rolesPermissionBody");
    const roleSelect = document.getElementById("roleSelect");

    if (!body || !roleSelect) return;

    const role = roleSelect.value;
    const permissions = getRoleAccess(role);

    body.innerHTML = "";

    permissions.forEach((p, index) => {
        body.innerHTML += `
            <tr>
                <td>${p.module}</td>
                <td>
                    <input type="checkbox"
                           class="role-menu-check"
                           data-index="${index}"
                           ${p.menuView ? "checked" : ""} />
                </td>
            </tr>
        `;
    });
}

function updateRoleAccess() {
    const role = document.getElementById("roleSelect").value;
    const permissions = getRoleAccess(role);

    document.querySelectorAll(".role-menu-check").forEach(check => {
        const index = Number(check.dataset.index);
        permissions[index].menuView = check.checked;
    });

    saveRoleAccess(role, permissions);
    alert("Role access updated successfully.");
}

function getCurrentLoggedInEmail() {
    const bodyText = document.body.innerText;
    const match = bodyText.match(/Hello\s+([^\s!]+@[^\s!]+)/i);
    return match ? match[1].toLowerCase() : "";
}

function getCurrentUserRole() {
    const email = getCurrentLoggedInEmail();
    const users = JSON.parse(localStorage.getItem("hipaUsers") || "[]");

    const user = users.find(u => u.email.toLowerCase() === email);

    if (!user) return "Super Admin";

    return user.role;
}

function applyRoleAccessToNavbar() {
    const role = getCurrentUserRole();
    const access = getRoleAccess(role);

    document.querySelectorAll(".hitachi-menu a").forEach(link => {
        const text = link.innerText.trim();

        const moduleAccess = access.find(a => a.module === text);

        if (moduleAccess && !moduleAccess.menuView) {
            link.style.pointerEvents = "none";
            link.style.opacity = "0.35";
            link.style.cursor = "not-allowed";
            link.title = "Access disabled for your role";
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const roleSelect = document.getElementById("roleSelect");
    const viewBtn = document.getElementById("viewRoleBtn");
    const updateBtn = document.getElementById("updateRoleBtn");

    if (roleSelect) {
        renderRoleAccess();
        roleSelect.addEventListener("change", renderRoleAccess);
    }

    if (viewBtn) {
        viewBtn.addEventListener("click", renderRoleAccess);
    }

    if (updateBtn) {
        updateBtn.addEventListener("click", updateRoleAccess);
    }

    applyRoleAccessToNavbar();
});

/* =========================================================
   SST STATUS - APP / USB / JOB TABLE DATA
========================================================= */

document.addEventListener("DOMContentLoaded", function () {
    setupSSTExtraTables();
});

function setupSSTExtraTables() {
    const page = window.location.pathname.toLowerCase();

    if (!page.includes("atmstatus")) {
        return;
    }

    loadAppNotificationRows();
    loadUsbNotificationRows();
    loadJobStatusRows();
}

function loadAppNotificationRows() {
    const tbody = document.getElementById("appNotificationRows");

    if (!tbody) return;

    tbody.innerHTML = "";

    const rows = [
        ["APP001", "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe", "8F34A90B92C44A7B91D8890EF214CC91", "29-05-2026 09:42:00", "29-05-2026 09:42:10"],
        ["APP002", "C:\\Users\\Admin\\Downloads\\unknown_tool.exe", "C412AC90DD1A84B77F29C0A143D9F210", "29-05-2026 09:50:00", "29-05-2026 09:50:08"]
    ];

    addRowsWithEmptySpace(tbody, rows, 5, 18);
}

function loadUsbNotificationRows() {
    const tbody = document.getElementById("usbNotificationRows");

    if (!tbody) return;

    tbody.innerHTML = "";

    const rows = [
        ["USB001", "USB Device Blocked", "VID_0781_PID_5567", "SanDisk USB Drive", "Blocked", "29-05-2026 09:30:00", "29-05-2026 09:30:08"],
        ["USB002", "USB Access Attempt", "VID_0951_PID_1666", "Kingston DataTraveler", "Blocked", "29-05-2026 09:36:00", "29-05-2026 09:36:07"]
    ];

    addRowsWithEmptySpace(tbody, rows, 7, 18);
}

function loadJobStatusRows() {
    const tbody = document.getElementById("jobStatusRows");

    if (!tbody) return;

    tbody.innerHTML = "";

    const rows = [
        ["JOB001", "Policy Sync", "System", "29-05-2026 10:00:01", "Completed"],
        ["JOB002", "HDE Scan", "System", "29-05-2026 09:55:00", "Completed"]
    ];

    addRowsWithEmptySpace(tbody, rows, 5, 18);
}

function addRowsWithEmptySpace(tbody, rows, columnCount, minimumRows) {
    rows.forEach(function (rowData) {
        const tr = document.createElement("tr");

        rowData.forEach(function (value) {
            const td = document.createElement("td");
            td.textContent = value;
            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });

    for (let i = rows.length; i < minimumRows; i++) {
        const tr = document.createElement("tr");
        tr.className = "empty-row";

        for (let j = 0; j < columnCount; j++) {
            const td = document.createElement("td");
            td.innerHTML = "&nbsp;";
            tr.appendChild(td);
        }

        tbody.appendChild(tr);
    }
}

