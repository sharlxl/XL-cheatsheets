---
title: Boot Process
sidebar_position: 8
---

# Booting

## Booting process

1. BIOS (Basic Input Output System)
   - POST (Power On Self Test)
   - Search for Bootable Device (HDD, CD/DVD, USB, LAN, HBA Card)
2. HDD (/dev/sda)
3. MBR (Master Boot Recall)
4. Grub2
   - Grand Unified Bootloader Version 2 (GRUB2)
   - loads its confirguration fromt he `/boot/grub2/grub/cfg` and displays a menu where you can select which kernel to boot.
   - loads the VM linuz kernel image (`/boot/vmlinuz-4.18.0-80.el8.x86_64`) ad extracts the contents of Initiramfs image (`initramfs-4.18.0-80.el8x86_64.img`)
5. Kernal, initramfs
6. Kernel initialises all hardware
   - Kernel Initializes all hardware for which it can find a driver in the initramfs
7. Executes `/sbin/init`
   - Then kernal execuites /sbin init fromt he initramfs as PID 1. On RHEL8, `/sbin/init` is a link to systemd
8. Systemd executes initrd.target
   - The systemd instance from the iniramfs executes all unit for the Initrd.target target.
     This includes Mounting the root file systems on disk on to the `/sysroot` dir
9. Mounting root fs on /sysroot directory
10. Root fs switched

    - Kernel root FS switched from initramfs root (`sysroot`) to systems rootfs (`/`) and systemd re-executes as a system version

11. Systemd looks for default.target
12. Starts/Stops units

## Rebooting and Shutting Down

| Target              | Purpose                                                                              |
| :------------------ | :----------------------------------------------------------------------------------- |
| `graphical.target`  | system supports multiple users, graphical- and text-based logins                     |
| `multi-user.target` | System supports multiple users, text-based logins only                               |
| `rescue.target`     | sulogin prompt, basic systme initialisation completed                                |
| `emergency.target`  | sulogin prompt, `initramfs` pivot complete, and asystem root mounted on `/`read only |

To view the dependencies  
`systemctl list-dependencies graphical.target | grep target`

Check the target:  
`systemctl get-default`

> graphical.target

Isolating the target:  
`systemctl isolate multi-user.target`
\*\*not all targets can be isolated

## Resetting root password

`rd.break` system breaks (interruptting the boot process.)

## Repairing systemd boot issues

To troubleshoot service startup issues at boot time, Red Hat Enterprise Linux 8 makes the following tools available.

- Boot the RHEL 8 into Rescue mode
- Boot the RHEL 8 into Emergency mode
- Enabling the Early Debug Shell

### Booting RHEL 8 into Rescue Mode

- Rescue mode is equivalent to single user mode and requires the root password.
- Rescue mode allows you to repair your system in situations when it is unable to complete a regular booting process.
- Rescue mode will try to mount all local file systems and start some important system services, but it does not activate network interfaces neither allow multiple users to be logged in.
- Emergency mode provides the most minimal environment possible and allows you to repair your system even in situations when the system is unable to enter rescue mode.
- In emergency mode, the system mounts the root file system as read-only, does not attempt to mount any other local file systems, does not activate network interfaces. and only starts few essential services.
- In Red Hat Enterprise Linux 8, emergency mode requires the root password.

#### Method 1

There is a GRUB2 menu option when you boot up the system which can be selected to directly boot into rescue mode.

#### Method 2

During bootup, when the GRUB2 menu shows up, press the e key for edit.  
Add the following parameter at the end of the linux line: systemd.unit=rescue.target  
Press Ctrl+a (or Home) and Ctrl+e (or End) to jump to the start and end of the line.  
Press Ctrl+x to boot the system with the parameter.

#### Enabling the Early Debug Shell

By enabling the debug-shell service with systemctl enable debug-shell.service , the system spawns a root shell onTTY9( Ctrl + Alt + F9 ) early during the boot sequence. This shell is automatically logged in as root, so that administrators can debug the system while the operating system is still booting.

## Repairing File System Issues at Boot

- Corrupt file system : systemd attempts to repair the file system. If the problem is too severe for an automatic fix, the system drops the user to an emergency shell.
- Nonexistent device or UUID in `/etc/fstab`
- Nonexistent mount point in `/etc/fstab`
- Incorrect mount options specified in `/etc/fstab`

\*\*You can use `nofail` option in the `/etc/fstab` file permits the system to boot even if the mount of that file system is not successful.
