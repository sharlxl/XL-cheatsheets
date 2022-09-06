---
title: Logical Volumes
sidebar_position: 6
---

# Logical Volume manager

## Managing Logical Volume Management (LVM) Storage

Logical Volume management provides a higher-level view of disk storgae on a computer system than the traditional view of disks and partitions.  
This gives the sytem administrator much more flexibility in allocating storage to applications and users

## Features of LVM

LVM allows for very flexible dick space management. It provides features like the ability to add disk space to a logical volume and its filesystem while that filesystem is mounted and active and it allows for the collection of multiple physical hard drives and partitions into a single volume group which can then be divided into logical volumes.

Storage volumes created under the control of the logical volume manager can be resized and moved around almost at will, although this may need some upgrading of file system tools.

Can think of LVMs as 'dynamic partitions', means you can create/resize/delete LVM 'partitios' from the command line while your linux system is running.  
No need to reboot the system to make the kernel aware of the newly created or resized partitions.

## LVM Architecture

### Physical volume (PVs)

The physical storage unit of an LVM LV is a block device such as a partition or whole disk.  
This device is initialised as an LVM PV

### Logical volume (LVs)

To create an LVM LV, the PV are combined into a Volume Group (VG).  
This creates a pool of disk space of out of which LVs can be allocated.  
This process is analogous to the way in which disks are divided into partitions.  
A LV is used by file systems and applications (such as databases)

## LVM Components

To use the device for an LVM LV the device must be initialised as a PV.  
Initialising a block device as a PV places a label near the start of the device

By default, the LVM label is placed in the second 512-byte sector.  
You can overwrite this default by placing the label on any of the first 4 sectors

An LVM label provides correct identification and device ordering for a physical device , since devices can come up in any order when the system is booted.  
an LVM label remains persistent across reboots and throughout a cluster and it identifies the device as an LVM PV.  
It contains a random unique identifier (UUID) for the PV.

The LVM meta data contains the configuration details of the LVM volume groups on your system. By default, an identical copy of the metadata is maintained in every metadata area in every physical colume within the volume group. LVM metadata is small and stored as ASCII
