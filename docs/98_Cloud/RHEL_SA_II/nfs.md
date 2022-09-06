---
title: NFS(Network File System)
sidebar_position: 10
---

# Network File System

Network File System is a NFS Server-Client protocol used for sharing files and directories between Linux / Unix to Unix/Linux systems and vise versa.  
It is a popular distributed filesystem protocol that enables users to mount remote directories on their server.  
NFS enables you to mount a remote share locally.  
NFS was developed by Sun Micro Systems in the year 1984

NFS allows a Linux server to share directories with other UNIX clients over network.  
NFS server exports a directory and NFS client mounts this directory.

The default NFS version in Red Hat Enterprise Linux 8 is 4.2.  
NFSv4 and NFSv3 major versions are supported. NFSv2 is no longer supported.  
NFSv4 uses only the TCP protocol to communicate with the server; earlier NFS versions could use either TCP or UDP.

NFS default port number is 2049  
NFS servers export shares (directories).  
NFS clients mount an exported share to a local mount point (directory), which must exist.  
NFS shares can be mounted a number of ways:

- Manually, using the mount command.
- Automatically at boot time using /etc/fstab entries.
- On demand, using either the autofs service or the systemd.automount facility.

## The `nfsconf` Tool

Red Hat Enterprise Linux 8 introduces the `nfsconf` tool to manage the NFS client and server configuration files under NFSv4 and NFSv3.  
Configure the `nfsconf` tool using `/etc/nfs.conf` (the `/etc/sysconfig/nfs` file from earlier versions of the operating system is deprecated now).  
Use the `nfsconf` tool to get, set, or unset NFS configuration parameters.  
Use the `nfsconf --set` section key value to set a value for the key in the specified section.

`nfsconf --set nfsd vers4.2 y`  
`nfsconf --get nfsd vers4.2`

> y

`nfsconf --unset nfsd vers4.2`
