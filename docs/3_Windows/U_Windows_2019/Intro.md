---
title: Introduction
sidebar_position: 1
---

# Outline

1. Windows Server 2019
2. Active Directory Domain Services on Window Server 2019
3. Azure Active Directory (AzureAD)
4. Understanding IPv4 and IPv6
5. Managing DHCP and DNS
6. Managing File servers and Storage
7. Hyper-V Virtualisation
8. Disaster Recovery in Windows Server 2019
9. Managing SAN storage and Failover Clustering
10. Implementing WSUS on Window Server 2019
11. Remoste Access on WIndow Server 2019
12. Performance monitoring in Windows Server 2019

# Notable Steps taken to set up Window server 2016

- Check Product activation
  > 1. Open `cmd` as Admin
  >
  > 2. `slmgr.vbs /ipk WC2BQ-8NRM3-FDDYY-2BFGV-KHKQY` (/ipk = install Product Key)
  >    `slmgr.vbs /skms kms.digiboy.ir` > `slmgr.vbs /ato` (/ato = Activate Windows)
  >
  > Other keys to try:
  >
  > - JCKRF-N37P4-C2D82-9YXRT-4M63B
  > - CB7KF-BWN84-R7R2Y-793K2-8XDDG

===

#### Software Licensing Manager Script

- `slmgr.vbs` is a built-in script to manage activation
  Avail in Window Vista/ Window Server 2008 and newer operating systems.

===

- Set static IP addr (IPv4)
- Set Private network
- Disable IPv6

#### What is Windows Server 20H2?

The latest ver of 2019

## Server Core vs Window Server with Desktop Experience

Server Core
Advantages:

- small footprint, uses fewer server resources and less disk space (ard 6GB for basic installation)
- fewer components = fewer software updates. Reduces the number of monthly restarts required.
- small attack surface makes Server Core much less vulnerable to exploits.

Disadvantages:

- Some apps not supported on Server Core Installation
- Some roles and role services are not available
- No logical GUI
