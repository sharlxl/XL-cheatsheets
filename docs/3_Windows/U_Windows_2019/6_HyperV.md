---
title: Hyper-V
sidebar_position: 6
---

# Overview

Its a Hardware virtualisation server role.
Provides a software layer known as Hypervisor. to control access to physical hardware.

# Hyper-V Manager

GUI used to manage both local and remote Hyper-V Host machine

# Best Practices

- Provision the host with adequate hardware
- Deploy VM on seperate disks, solid state drives
- Do not collocate other server roles
- Manage Hyper-V remotely
- Run Hyper-V by using a Server Core Config(without GUI)

# Nested Virtualisation

Provides the ability to install the Hyper-V role within a guest VM  
Requires both the hyper-V host and guest VM must be Windows Server 16 or later

To enable it on the host.

- `Set-VMProcessor -VMName <VMname> -ExposeVirtualizationExtentions $true`

# Azure Migration

Migration to Azure VMs - Azure Migrate

- used to migrate on-prem workloads, apps and VMs
- Azure Migrate: Server Assessment
- Azure Migrate: Server Migration

# Hyper-V replica

A Hyper-V Replica can asynchronously replicate a VM in aprimary site to a replica VM in a secondary site, enabling workload continuity and recovery when outages occur.

- you can establish a Hyper-V Replica witha Hyper-V host regardless of its location and domain membership, providing you have network connectivity with it.
- you can also implement Hyper-V Replica when Hyper-V hosts are members of untrusted domains, if you configure certificate-based auth.
- Hyper-V creates a local security group named Hyper-V Administrators.
- When you limit replication to specific servers, you need to specify a trust group, which is used to identify the servers within which a VM can move
- The Replica Hyper-V host can authenticate a primary hyper-v host by using Kerberos Auth ot certificate auth.
- configure Windows Defende Firewall to allow either HTTP or HTTPS Hyper-V Replica traffic.
