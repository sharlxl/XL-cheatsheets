---
title: Packet Manager
sidebar_position: 1
---

# What is Packet manager?

- A software/code which enables you to pull from a a remote location, namely repositories.
- It is pulling from a maintained repo.
- `.rpm` is for CentOS/RHEL `.deb` is for Ubuntu

## `yum` Packet manager

(Linux Default packet manager)
Used to search, install, update and remove necessary rpm files from system.

## `dnf`(Dandified YUM)

The next-generation version of YUM and intended to be the replacement for YUM in RPM-based systems

### why use `dnf` instead of `yum`?

Yum Package Manager has been replaced by DNF Package Manager since many long-standing issues in Yum remain unresolved.

1. An undocumented API
2. Python 3: CentOS/RHEL8 was about to make the shift to Python 3 and Yum wouldn’t survive this change, whereas DNF can run using either Python 2 or 3.
3. Dependency solving algorithm  
   DNF uses a state-of-the-art satisfiability (SAT), -based dependency solver.
   To put it simply, yum was outdated and couldn’t stand up to the rigors of the modern CentOS 8 distribution

These problems include poor performance, excessive memory usage, slowdown for dependency resolution.

## `rpm`

> stands for Red Hat Package Manager.

An RPM package uses the `.rpm` extension and is a bundle (a collection) of different files.  
It can contain the following:

- Binary files, also known as executables (`nmap`, `stat`, `xattr`, `ssh`, `sshd`, and so on).
- Configuration files (`sshd.conf`, `updatedb.conf`, `logrotate.conf`, etc.).
- Documentation files (README, TODO, AUTHOR, etc.).

The name of an RPM package follows this format:

`<name>-<version>-<release>.<arch>.rpm`

An example:

`bdsync-0.11.1-1.x86_64.rpm`
