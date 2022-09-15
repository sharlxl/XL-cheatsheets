---
title: Windows Server Administration
sidebar_position: 2
---

# Least Privileged Concept

Restricting access rights for users and computing processes to ony resources absolutely required to perform their job roles.
To hold minimum permissions necessary to complete current task.

# Delegated privileges

Use Delegation og Control Wizard

- The wizard have pre-defined tasks that can be assigned to users or groups, or custom permission can be assigned.

# Jump Servers

A Jump server is a hardened server used to access and manage devices in a different security zone, such as between an internal network and a perimeter network

(jump server vs jump host?)
IT Admin -> Jump Server -> Production Server

# Windows Server Admin Center

Windows Admin Center consolidates multiple admin tools into a single console that can be easily deployed and accessed through a web interface.

Windows Admin Center isa modular Web Application comprised of the following four modules:

- Server Manager
- Failover Clusters
- Hyper- Converged Clusters
- Windows 10 Clients

# Server Manager

Allows server administrators to:

- Manage the local server and remotely manage multiple servers
- Configure the local server
- Query event logs
- Monitor status of services
- Perform best practice analysis
- Check performance monitors

Server Manager initially opens to the dashboard, which provides quick access to:

- Add roles and features
- Add other Servers to manage
- Create a server group
- Connect this server to cloud services

# RSAT (Remote Server Adminisration Tools)

To enable IT administrators to remotely manage roles and features in Windows Server from a computer that is running Windows 10, use RSAT

RSAT include:

- Active Directory Domain Services tools
- DHCP server tools
- DNS server tools
- File Services tools
- Group Policy management tools

# Intro to Window Powershell

Windows PowerShell is a command line shell and scripting language

Windows PowerShell cmdlets execute in a WIndows Powershell console of can be executed as Powershell scripts

Cmdlets are small commands that perform specific functions. (PowerShell Command)

Modules - cmdlet specific to a product are packaged together and installed as modules, some are installed with the product and some need to be added manually. (Example: Module for file services -> cmdlets)

PowerShell Console:

- Run PowerShell commands and execute scripts

PowerShell ISE:

- PowerShell Integrated Scripting Environment (ISE) is a GUI-based tool that allows you to:
  - Run commands, create, modify, execute scripts

Windows PowerShell remote management :

- Allows Windows Powershell to remotely run cmdlkets on other Windows system.

Common Cmdlet

|                           cmdlet                           |    syntax    |
| :--------------------------------------------------------: | :----------: |
|                      PowerShell help                       |   Get-help   |
|            Gets all commands that are installed            | Get-Command  |
|  Gets the members, the properties and methods, of objects  |  Get-Member  |
| Gets events and event logs from local and remote computers | Get-EventLog |
