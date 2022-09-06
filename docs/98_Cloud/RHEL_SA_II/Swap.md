---
title: Swap Space Concepts
sidebar_position: 11
---

# Swap Space Concepts

A swap space is an area of a disk under the control of the Linux kernel memory management subsystem.  
The kernel uses swap space to supplement the system RAM by holding inactive pages of memory.  
The combined system RAM plus swap space is called virtual memory.

When the memory usage on a system exceeds a defined limit, the kernel searches through RAM looking for idle memory pages assigned to processes.  
The kernel writes the idle pages to the swap area and reassigns the RAM pages to other processes.  
If a program requires access to a page on disk, the kernel locates another idle page of memory, writes it to disk, then recalls the needed page from the swap area.

## Setting the Swap Space Priority

By default, the system uses swap spaces in series, meaning that the kernel uses the first activated swap space until it is full, then it starts using the second swap space. However, you can define a priority for each swap space to force that order

To set the priority, use the `pri` option in `/etc/fstab` . The kernel uses the swap space with the highest priority first. The default priority is -2.

The following example shows three swap spaces defined in `/etc/fstab` . The kernel uses the last entry first, with `pri=10` . When that space is full, it uses the second entry, with `pri=4` . Finally, it uses the first entry, which has a default priority of `-2`.
