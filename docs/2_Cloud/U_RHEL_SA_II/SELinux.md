---
title: Managing SElinux
sidebar_position: 4
---

# Managing SELinux Security

SELinux aka Security-Enhanced Linux. Security feature of the Linux Kernel

SELinux gives you the ability to limit the privileges associated with executing processes and reduce the damage that could result from system and applications vulnerabilities exploitation.

It is designed to protect the server against misconfigurations and/or compromised daemons. It put limits and instructs server daemons or programs what files they can access and what actions they can take by defining a security policy.

## Basic SELinux Security Concepts

- SELinux provides a critical security purpose in Linux, permitting or denying access to files and other resources that are significantly more precise than user permissions.

- SELinux is an additional layer of system security. A primary goal of SELinux is to protect user data from system services that have been compromised. Most Linux administrators are familiar with the standard user/group/other permissions security model and known as discretionary access control.

- SELinux provides an additional layer security that is object-based and controlled by more sophisticated rules, knows as mandatory access control.

## Apache service without SELinux Protection (DAC)

- To allow remote anonymous access to a webserver, firewall ports must be opened.
- However, this gives malicious people an opportunity to crack the system through a security exploit, and if they compromise the webserver process, gain its permissions:  
  the permissions of the apache user and the apache group.

- That user/group has read access to things like the document root (Ivar/www/html), as well as write access to /tmp, /var/tmp, and any other files/directories that are world-writable.

## Apache service with SELinux Protection (MAC)

SELinux is a set of security rules that determine which process can access which files, directories, and ports. Every file, process, directory, and port has a special security label called a <b>SELinux context</b>.

It is <b>built into the Linux kernel</b> and enabled by default on Fedora, CentOS, RHEL and a few other Linux distributions.

- For example, an apache user with full permission can only access /var/www/html directory, but can not touch other parts of the system such as /etc directory without policy modification.
- If an attacker managed to gain access to sendmail mail or bind dns or apache web server, would only have access to exploited server and the files normally has access as defined in the policy for the server.
- An attacker can not access the other parts of the system or internal LAN.
- In other words, damage can be now restricted to the particular server and files.
- The cracker will not able to get a shell on your server via common daemons such as Apache / BIND / Sendmail as SELinux offers the following security features:
  - Protect users' data from unauthorised access
  - Protect other daemons or programs from unauthorised access
  - Protect network ports / sockets / files from unauthorised access
  - Protect server against exploits
  - Avoid privilige escalation and much more.

## SELinux context

A <b>context</b> is a name that is used by the SELinux policy to determine whether a process can access a file, directory, or port. By default, the policy does not allow any interaction unless an explicit rule grants access. If there is <b>no allow rule, no access is allowed</b>.

SELinux is a set of security rules that determine which process can access which files, directories, and ports. Every file, process, directory, and port has a <b>special security label called a SELinux context</b>.

SELinux labels have several contexts: <b>user , role , type , and sensitivity</b>. The targeted policy, which is the default policy enabled in Red Hat Enterprise Linux, bases its rules on the third context: the type context. Type context names usually end with `_t` .

`ls -ltrdZ /home/shar`

`## SELinuxUser:Role:Type:Level:File ##`

> drwx------. 17 shar superuser `unconfined_u:object_r:user_home_dir_t:s0 4096 Sep 2 10:00 /home/shar`

check context for process:  
` ps-efZ | grep - httpd |head -1`

## SELinux Modes

SELinux can operate in any of the 3 modes :

- Enforced : Actions contrary to the policy are blocked and a corresponding event is logged in the audit log.
- Permissive : Actions contrary to the policy are only logged in the audit log.
- Disabled : The SELinux is disabled entirely.

## Toggling the SELinux modes temporarily

To switch between the SELinux modes temporarily we can use the setenforce command as shown below :  
`setenforce [ Enforcing | Permissive | 1 | 0 ]`

- 0 –> Permissive
- 1 –> Enforcing

## Changing SELinux modes Permanently

One way of changing the SELinux mode permanently to either of Enforcing or Permissive is – to edit the /etc/sysconfig/selinux file and set SELINUX parameters value to either enforcing or permissive.

`ls -l /etc/sysconfig/selinux`

> lrwxrwxrwx. 1 root root 17 Mar 2 13:03 /etc/sysconfig/selinux -> ../selinux/config

## Changing context

`chcon -R(Recursively) httpd_sys_content_t /webdata/`

changes context from `default_t` to `httpd_sys_content_t`

## SELinux Booleans

SELinux Booleans are just like a switch which can be on or off as per requirement. It can be used to change the behaviour of the SELinux policy. SELinux Booleans are rules that can be enabled or disabled. They can be used by security administrators to tune the policy to make selective adjustments.

How to list SELinux Booleans:  
To view all available Booleans in system we can use `getsebool -a` command.

To get more detailed information about available Booleans such as their current status, default status and description we can use following command  
`semanage boolean –l`

## How to change SELinux Booleans

SELinux Booleans are SELinux policy setting. A SELinux Boolean can be either on or off. If Boolean is on, SELinux will permit the associate action. If Boolean is off, SELinux will deny the associate action.

To change the Boolean setting we can use setsebool command. To enable a Boolean, we can use “on” or “1” option with this command. For example, to enable ftp_home_dir Boolean we can use any one of following commands

`setsebool ftp_home_dir on`  
OR  
`setsebool ftp_home_dir 1`

Above commands update Boolean setting in run time.  
Change made with above commands will not preserve after the reboot.  
To make a change permanent we have to use -P option.  
For example, following command will activate ftp_home_dir Boolean permanently.

> setsebool `-P` ftp_home_dir on

SELinux Booleans settings are stored in `/sys/fs/selinux/booleans` directory
