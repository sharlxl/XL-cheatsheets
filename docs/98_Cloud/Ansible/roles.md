---
title: Roles
sidebar_position: 7
---

# Ansible roles

Make your work reusable

`ansible-galaxy init`

```yaml
- name: Install and configure mySQL
  host: db-server
  roles:
    - mysql
```

How to know where the role files are located.

- create a folder called 'roles' in your playbook folder.

or create the role in `/etc/ansible/roles`

`ansible-galaxy list` - to see the installed roles

`ansible-config dump | grep ROLE` - to see where the roles are located in  

