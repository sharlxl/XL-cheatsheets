# Accessing Linux file systems.

## Block device

Low level access to storage devices in Linux is provided by a special type of file called a block device. These block devices must be formatted with a file system before they can be mounted.

Block Devices are stored in the /dev dir, along with other device files. Device files are created automatically by the operating system. In RHEL, the first SATA/PATA,SAS,SCSI, or USB hard drive detected is called /dev/sda, second is /dev/sdb and so on.  
/dev/vda, /dev/vdb - virtio-blk paravirtualised storage (some vitural machines)

`fdisk`

## Locating files

`locate`  
`find`
