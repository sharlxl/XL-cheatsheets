# Ansible Playbooks

Playbook - a single YAML file

- Play -defines a set of activities(tasks) to be run on hosts
  - Task - an action to be performed on the host
    - Execute a command
    - Run a script
    - Install a package
    - Shutdown/restart

## Playbook Format

1. Play is a Dictionary
2. Task is a an Array/List

## Host

```yaml title="playbook.yml"
hosts: localhost
```

```yaml title="inventory"
localhost

server1.company.com
server2.company.com

[mail]
server3.company.com
server4.company.com

[db]
. . .

[web]
. . .

etc ...
```

## Module

- command
- script
- yum
  - name
  - state
- service
  - name
  - state

## Run

`ansible-playbook --help`

Executing Ansible playbook

```bash title="syntax"
ansible-playbook [playbook filename]
```

===
`ansible` - for adhoc testing, like for connectivity to the target servers

`ansible [hosts] -a [command]`  
`ansible all -a "/sbin/reboot"`  
`ansible [hosts] -m [module]`  
`ansible [target] -m ping`  
===

`ansible-playbook [playbook filename]`
`ansible-playbook playbook-webserver.yaml`

===
EXAMPLES:  

```yaml
-
    name: 'Execute command to display date on web_node1'
    hosts: web_node1
    tasks:
        -
            name: 'Execute a date command'
            command: date
-
    name: 'Execute a command to display hosts file contents on web_node2'
    hosts: web_node2
    tasks:
        -
            name: 'Execute a command to display hosts file'
            command: cat /etc/hosts

```

```yaml
-
    name: 'Execute a script on all web server nodes and start httpd service'
    hosts: web_nodes
    tasks:
        -
            name: 'Update entry into /etc/resolv.conf'
            lineinfile:
                path: /etc/resolv.conf
                line: 'nameserver 10.1.250.10'
        -
            name: 'create a new web user'
            user:
                name: web_user
                uid: 1040
                group: developers
        -
            name: 'Execute a script'
            script: /tmp/install_script.sh
        -
            name: 'Start httpd service'
            service:
                name: httpd
                state: present
```