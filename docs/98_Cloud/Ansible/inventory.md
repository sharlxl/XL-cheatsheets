# Ansible inventory

Agentless

Default inventory in host server - `/etc/ansible/hosts`

## Inventory parameters

- ansible_connection ( ssh/winrm/localhost )
- ansible_port ( 22/5986 )
- ansible_user ( root/administrator )
- ansible_ssh_pass ( Password )

Example:

```bash
web ansible_host=server1.company.com ansible_connection=ssh
db  ansible_host=server2.company.com ansible_connection=winrm

etc ...

# or just start off with

localhost ansible_connection=localhost
```

#### Practice

`mkdir testing` -cd into dir  
`cat > inventory.txt`

> server1 ansible_host=[ip addr] [other para if applicable]

`ansible server1 -m ping -i inventory.txt`

Example:

```bash
# Sample Inventory File

web1 ansible_host=server1.company.com ansible_connection=ssh ansible_user=root ansible_ssh_pass=Password123!
web2 ansible_host=server2.company.com ansible_connection=ssh ansible_user=root ansible_ssh_pass=Password123!
web3 ansible_host=server3.company.com ansible_connection=ssh ansible_user=root ansible_ssh_pass=Password123!
db1 ansible_host=server4.company.com ansible_connection=winrm ansible_user=administrator ansible_password=Password123!
```

```bash
# Sample Inventory File

# Web Servers
web1 ansible_host=server1.company.com ansible_connection=ssh ansible_user=root ansible_ssh_pass=Password123!
web2 ansible_host=server2.company.com ansible_connection=ssh ansible_user=root ansible_ssh_pass=Password123!
web3 ansible_host=server3.company.com ansible_connection=ssh ansible_user=root ansible_ssh_pass=Password123!

# Database Servers
db1 ansible_host=server4.company.com ansible_connection=winrm ansible_user=administrator ansible_password=Password123!

# Creating groups
[web_servers]
web1
web2
web3

[db_servers]
db1

# Creating a group of groups
[all_servers:children]
web_servers
db_servers
```
