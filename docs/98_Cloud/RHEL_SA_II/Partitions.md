# Partitions

## Partitioning a Disk

Disk partitioning allows system administrators to divide a hard drive into multiple logical storage units, referred to as partitions.  
By separating a disk into partitions, system administrators can use different partitions to perform different functions.

Benefits of disk partitioning:

1. Limit available space to applications or users.
2. Separate operating system and program files from user files.
3. Create a separate area for memory swapping.

## MBR Partitioning Scheme

Master Boot Record (MBR) partitioning scheme has dictated how disks are partitioned on systems running BIOS firmware.  
It supports maximum 4 primary partitions. You can create 4 Primary partitions or 3 primary and 1 extended partitions and with the use of extended and logical partitions, administrators can create a maximum of 15 partitions.

It does not allow the configuration of more than four main partitions. Those partitions are called primary partitions.  
If we further attempt to create another partition using the free space, then installer will throw an error message.  
i.e. Could not allocate requested partitions, not enough free space on disks.  
Disk partitions are limited to 2TB

To overcome with partition limitation of MBR, they have came up with the concept of an extended partitions. By extended partitions, we can further create partitions as logical partitions.

## GPT Partitioning Scheme

Physical disks are getting larger, and SAN-based volumes even larger than that, the 2 TiB disk and partition size limit of the MBR partitioning scheme is no longer a theoretical limit, but rather a real-world problem that system administrators encounter more and more frequently in production environments.  
As a result, the legacy MBR scheme is in the process of being superseded by the new GUID Partition Table (GPT) for disk partitioning.

Newer computers come with a replacement firmware for the old BIOS system called UEFI (Unified Extensible Firmware interface), and GPT is a part of the UEFI standard.

For systems running Unified Extensible Firmware Interface (UEFI) firmware, GPT is the standard for laying out partition tables on physical hard disks. GPT is part of the UEFI standard and addresses many of the limitations that the old MBR-based scheme imposes.

A GPT provides a maximum of 128 partitions.

Unlike an MBR, which uses 32 bits for storing logical block addresses and size information, a GPT allocates 64 bits for logical block addresses.

This allows a GPT to accommodate partitions and disks of up to eight zebibytes (ZiB) or eight billion tebibytes.

In addition to addressing the limitations of the MBR partitioning scheme, a GPT also offers some additional features and benefits.  
A GPT uses a globally unique identifier (GUID) to identify each disk and partition.  
In contrast to an MBR, which has a single point of failure, a GPT offers redundancy of its partition table information.  
The primary GPT resides at the head of the disk, while a backup copy, the secondary GPT, is housed at the end of the disk.  
A GPT uses a checksum to detect errors and corruptions in the GPT header and partition table.

## How to identify what partitioning standard is used

`fdisk -l | less`

> Disklabel type: gpt
