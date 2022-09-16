---
title: Active Directory Domain Services
sidebar_position: 3
---

# Work Group Vs Domain Env

| Workgroup                     | Domain                        |
| ----------------------------- | ----------------------------- |
| No Centralised Auth           | Centralised Auth              |
| No Centralised Administration | Centralised Administration    |
| Max of 20 computer supported  | Unlimited number of Computers |
| Low Security                  | High Security                 |

# AD DS terms

AD DS is composed of both logical and physical components

| Logical      | Physical                     |
| ------------ | ---------------------------- |
| Domains      | Domain Controllers           |
| Domain Trees | Read-only Domain Controllers |
| Forests      |                              |
| OUs          |                              |
| Containers   |                              |

# Installing Active Directory

1. Static IP address
2. Computer name
3. DNS Server address defined
4. Location of Database files

---

# Setting up your server Architecture

Have these ready for the servers:

- IP addr
- Subnet mask
- Default Gateway
- Preferred DNS
- Alt DNS

1. Domain controller/ DNS Server
   - Require Static IP address
   - Computer name ( cannot change after AD is installed.)
   - DNS server adr defined
   - Location of db files. (AD is a db, so the data is ideally storing in a separate physical hard drive, but for labs, can just save in C:/)
2. Core Server (for what?)
3. Server

---

# Set up the Role in Server Manager

- Add a new Forest
- Set up a root Domain name
- Paths (Set up the database folder, log files, SYSVOL)
- If all pre-requisite checks pass
- Click install

In Server manager, AD DS will show all the DC(Domain Controller). DC should have 5 AD tools in the tools menu.

---

# Verify DNS Record.

- Go to DNS under Tools.
- Go to Forward lookup zones

---

# AD DS Objects

1. User Objects
   - Authentication of the user at logon
   - Access Control
2. Group Obects
   - Simplify assigning permissions
3. Computer Objects
   - Authentication of the Computer at startup

---

# Organisational Units (OUs) and Containers

- Use containers to group objects within a domain:

  - You cannot applu GPOs(Group Policy Objects) to containers
  - Containers are used for system objects and as the default location for new objects
    (GPO -> apply policies to users/computers)

- Create OUs
  - Configure objects by assigning GPOs to them
  - Delegate administrative permissions.

#### Example

- Go to AD users and computers
- Create work group
- Assign members
- plan the folders or permissions for the group.

- Prestaging a computer
  - Create a new computer in Server Manager
  - OR join the domain from the local machine itself.

# Domain Controllers

- Are servers that host the AD DS database (`ntds.dit`) and `SYSVOL`
  - `C:/Windows/NTDS/ntds.dit` (Contains your AD users / computer informations)
  - `C:/Windows/SYSVOL/sysvol` ( contains your domain)
  - `C:/Windows/SYSVOL/sysvo/< domain name >` (contains your policies & scripts)
- Host the Kerberos authentication services and KDC services to perform authentication
- Have best practices for:
  - Availability - Use at least 2 domain controllers in a domain.

# Global Catalog

- Hosts a partial attribute set for the other domains in the forest.
- SUpports queries for objects throughout the forest

In a single domain, you should confirgure all the domain contorllers to hold a copy of the global catalog.
When you have multiple sites, you should also make at least one domain controller at each site a global catalog server.

# GPO (Group policy objects)

- A powerful administrative tool
- Enforce various types of settings to a large number of users and computers
- Typically used for:
  - Apply Security setting
  - Manage Desktop application settings
  - Deploy application Software
  - Manage folder redirection (user profile)
  - Configure network settings

## GP Preferences

A collection of Group Policy CSE(Client-Side Extentions) taht deliver preference setting to domain-joined computers

Preference setting differ from policy settings because users have a choice to alter the administrative configuration. Policy settings administratively enforce setting, which restricts users choice.

Preferences can be targeted to specific groups, operating systems, IP addresses, MAC addresses, and more.

## GP Processing Order

GPOs are processed on a client computer in the following order:

1. Local GPOs
   - `gpedit.msc` / workgroup
2. Site-level GPOs
   - AD site (Physical location)
   - Not common to set a GP for site-level
3. Domain-level GPOs
   - Apply to all user & computer in Domain
4. Organisational Unit GPOs
   - Apply to users & computer in a specific OU

Weak to Strong (Local to Organisation)

## Altering GP processing

- Block Inheritance
- Enforced
- Security filtering

Enforced overwrites block inheritance.

## Starter GPO

## Backup GPO

## GPupdate

## GPresults
