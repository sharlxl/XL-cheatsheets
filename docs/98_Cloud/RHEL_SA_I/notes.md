---
title: Intro
sidebar_position: 1
---

# Redhat System Administration I

Red Hat Enterprise Linux(RHEL)  
CentOS command is same as RHEL

## What is Putty?

Useful to connect to another VM in a remote setting.
[PuTTY](https://www.putty.org)

## Hardlink v Softlink

#### Softlink

- can cross the file system
- allows you to link between directories
- has diff inodes number and file permissions than original file
- permissions will not be updated

#### Hardlink

- cannot cross the file system directories
- cant link directories
- has the same inodes number and permissions of original file
- permissions will be updated if we change th permission of the source file.

## Manual (man)

Contains:

- Name
- Synopsis
- Configuration
- Description
- options
- exit status
- return value
- errors
  -Environment
- files
- versions
- conforming to
- notes
- bugs
- example
- authors
- see also

## User Administration - Group

`/etc/group`

```bash
groupadd
groupmod
useradd -g
usermod -G (add group)
usermod -g (remove group)
```

## Configuring sudo

`visudo` to edit the file `/etc/sudoers`
`USER PLACES=(AS_USER)[NOPASSWD:]COMMAND`

sverma ALL=(ALL)ALL

> This can basically means that the user 'sverma' can execute ALL commands as ALL users from ALL places

sverma ALL=(ALL) NOPASSWD:ALL

> same as above but without any password prompt

user hosts=(users:groups) commands

sverma - This is the user to whom the following 'items' applies  
ALL - this is the places where the `sudo` command can be launched  
(ALL) -This si the part that specify which user(s) you may act as  
ALL - This is the command(s) that may be ran using `sudo` command

EXAMPLE:
shar ALL=(ALL) /usr/bin/yum, /sbin/mount, /sbin/ifconfig

> allowing shar to only run the commands in the stated paths as above

## Control acces to files

commonly used:

| Value |  Format   |                                                       Definition                                                        |
| :---: | :-------: | :---------------------------------------------------------------------------------------------------------------------: |
|  777  | rwxrwxrwx |                                                    No restrictions.                                                     |
|  755  | rwxr-xr-x | file owner can read , write and exe file, everyone else can read or exe the file. Common for programs used by all users |
|  700  | rwx------ |                               file owner may read, write and exe, no one else have rights                               |
|  666  | rw-rw-rw- |                                           All users can read and write file.                                            |
|  644  | rw-r--r-- |                           Owner can read and write a file while everyone else only can read.                            |
|  600  | rw------- |                                   file owner may read, write, no one else have rights                                   |

## What is SetUID(SUID)

If SUID bit is set on a file and a user executes it. The process will have the same rights as the owner of the file being executed.

> EXAMPLE:
> passwd command have SUID bit enabled. So when a normal user changes his password this script updates a few system files like /etc/passwd and /etc/shadow which cannot be updated by non-root account. So that passwd command process always run with root user rights

## Applying SUID

```bash title="Method 1"
chmod u+s <filename>
ls -l <filename>

> -rwsr-xr-x 1 root root 0 Sep 9 09:09 <filename>
```

```bash title="Method 2"
chmod 4655 <filename>
ls -l <filename>

> -rwSr-xr-x 1 root root 0 Sep 9 09:09 <filename>
```

\*\* s or S in the x = SUID bit enabled.

# SetGID(SGID)

same as SUID, the process will have the same group rights of the file being executed.
If SGID bit is set on any directory, all subdirectories and files created inside will get same group ownership as the main directory, it doesnt matter who is creating.

The way to apply SGID similar to SUID.

```bash title="Method 1"
chmod g+s <filename>
ls -l <filename>

> -r-xrwsr-x 1 root root 0 Sep 9 09:09 <filename>
```

```bash title="Method 2"
chmod 4655 <filename>
ls -l <filename>

> -r-xrwSr-x 1 root root 0 Sep 9 09:09 <filename>
```

## Stickybit

Sticky bit is used to indicate special permissions for file and directories. If a directory with sticky bit enabled will restrict deletion of the file inside it. It can be removed by root, owner of the file or who have to write permission on it. This is useful for publically accessible directories like /tmp

```bash title="applying sticky bit"
chmod 1777 <filename>
ls -ltrd <filename>

> drwxrwxrwt 2 root root 0 Sep 9 09:09 <filename>
```

\*\* t/T is the indication that stickybits are enabled for the directory/file

## Load Average in Linux

The load average represents the percieved system load over a time period. Linux determines this by reporting how many processes are ready to run on a CPU, and how many processes are waiting for disk or network I/O to complete

`uptime`

> 14:05:09 up 1:10, 1 user, load average: 0.03, 0.01, 0.00

`lscpu`

> Architecture: x86_64  
> CPU op-mode(s): 32-bit, 64-bit  
> Byte Order: Little Endian  
> CPU(s): 1  
> On-line CPU(s) list: 0  
> Thread(s) per core: 1  
> Core(s) per socket: 1  
> Socket(s): 1  
> NUMA node(s): 1  
> Vendor ID: GenuineIntel  
> CPU family: 6  
> Model: 140  
> Model name: 11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz  
> Stepping: 1  
> CPU MHz: 1382.401  
> BogoMIPS: 2764.80  
> Hypervisor vendor: VMware  
> Virtualization type: full  
> L1d cache: 48K  
> L1i cache: 32K  
> L2 cache: 1280K  
> L3 cache: 8192K  
> NUMA node0 CPU(s): 0  
> Flags: fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ss syscall nx pdpe1gb rdtscp lm constant_tsc arch_perfmon rep_good nopl xtopology tsc_reliable nonstop_tsc cpuid pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_lm abm 3dnowprefetch cpuid_fault invpcid_single ssbd ibrs ibpb stibp ibrs_enhanced fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid avx512f avx512dq rdseed adx smap avx512ifma clflushopt clwb avx512cd sha_ni avx512bw avx512vl xsaveopt xsavec xgetbv1 xsaves arat avx512vbmi umip pku ospke avx512_vbmi2 gfni vaes vpclmulqdq avx512_vnni avx512_bitalg avx512_vpopcntdq rdpid movdiri movdir64b fsrm avx512_vp2intersect md_clear flush_l1d arch_capabilities

`top` - display Linux processes

## Process management

Set of instruction loaded in a memory

`ps ` - report a snapshot of the current processes
`ps -a ` - All terminals
`ps -e` - list of all the processes
`ps -o ` - (customer properties)
`ps -ao tty,comm,pid,%mem,%cpu` - list out terminal, command, pid, memory, cpu
`ps -aux` displays all processes with column in which users will be interested, includes processes without a controlling terminal
`ps -ef` similar to above.

## Process stat codes

STAT or 'S' to describe the state of process

D - uninterruptible sleep (usuallyIO)  
R- This is a state where a process is either in running or ready to run  
S - Interruptible Sleep (Waiting for an event to complete)  
T - Stopped, Once the process is completed, this state occurs. This process can be restarted  
Z - Defunct(Zombie): In this state, the process will be terminated and the information will still be available in the process table.  
W - Paging

## What is Systemd Daemon

## systemctl command

`systemctl status sshd.service`
`service sshd status` - symbolic link in RHEL8

target == runlevel

```bash
cd /etc/systemd/system
ls -ltr default.target
```

> lrwxrwxrwx. 1 root root 40 Aug 25 09:33 default.target -> /usr/lib/systemd/system/graphical.target

To check any of the system dependencies

`systemctl list-dependencies [service/target name]`

`systemctl list-units --type service`

## `reload`

`systemctl status rsyslog`

`ps -ef | grep -i rsyslog`

`systemctl restart rsyslog`

===
`ps -ef | grep -i sshd.service`

`systemctl reload sshd.service`

## Masking & unmasking

`systemctl mask sendmail`
`systemctl unmask sendmail`

===

Systemd == SysVinit
The global systemd config -> /etc/systemd
Service config files -> /usr/lib.systemd/system (directory)
Custom service config files -> /etc/systemd/system (dir)

`systemctl --version`
`systemd-analyze`

## Journal analysis

`journalctl`

eg  
`journalctl /sbin/crond`  
OR  
`journalctl --unit=chronyd`  
OR  
`journalctl -u chronyd`

`journalctl -b`

`journalctl --since=today`
