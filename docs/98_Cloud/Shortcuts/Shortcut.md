# Linux file locations

| Path                              | What                                       |
| :-------------------------------- | :----------------------------------------- |
| `/etc/ssh/sshd_config`            | SSHD config                                |
| `/etc/ssh/ssh_config`             | SSH config                                 |
| `/etc/login.defs`                 | user account config                        |
| `/etc/ssh/ssh_host_ecdsa_key.pub` | contains the public key                    |
| `/home/< USERNAME >/.ssh/`        | the GIVEN public Key                       |
| `/etc/sudoers`                    | Sudoers config                             |
| `/etc/systemd`                    | global systemd config                      |
| `/usr/lib.systemd/system`         | Service config                             |
| `/etc/systemd/system`             | Custom service config                      |
| `/etc/rsyslog.conf`               | rsyslog config                             |
| `/etc/sysconfig/network-scripts`  | Network Manager config                     |
| `/etc/firewalld`                  | firewalld system config                    |
| `/etc/nfs.conf`                   | nfsconf tool config                        |
| `/etc/crontab`                    | crontab dir                                |
| `/etc/cron.d`                     | cron.d dir                                 |
| `/etc/sysconfig/selinux`          | SELinux config                             |
| `/sys/fs/selinux/booleans`        | SE Linux Booleabn setting                  |
| `/etc/fstab`                      | swap space/priority setting                |
| `/dev`                            | Block Devices dir                          |
| Ansible                           |                                            |
| `/etc/ansible/hosts`              | Ansible's Default inventory in host server |
| `/etc/ansible/roles`              | Ansible's Roles dir                        |

|       Logs dir       |
| :------------------: |
| `/var/log/messages`  |
|  `/var/log/secure`   |
|  `/var/log/maillog`  |
|   `/var/log/cron`    |
| `/var/log/boot.log ` |
