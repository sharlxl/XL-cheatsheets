# Ansible Conditionals

```yaml
-
    name: 'Execute a script on all web server nodes'
    hosts: all_servers
    tasks:
        -
            service: 'name=mysql state=started'
            when: 
              "ansible_host==\"server4.company.com\""
```
```yaml
-
    name: 'Am I an Adult or a Child?'
    hosts: localhost
    vars:
        age: 25
    tasks:
        -
            command: 'echo "I am a Child"'
            when: 
                "age < 18"
        -
            command: 'echo "I am an Adult"'
            when:
                "age >= 18"
```

```yaml
-
    name: 'Add name server entry if not already entered'
    hosts: localhost
    tasks:
        -
            register: "command_output"
            shell: 'cat /etc/resolv.conf'
        -
            shell: 'echo "nameserver 10.0.250.10" >> /etc/resolv.conf'
            when: " command_output.stdout.find(\"10.0.250.10\")==-1"
```