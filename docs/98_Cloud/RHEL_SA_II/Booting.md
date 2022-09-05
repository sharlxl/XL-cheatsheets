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
