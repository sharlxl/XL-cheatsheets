---
title: Mamage Network Security
sidebar_position: 9
---

Manage Network Security

## Managing Server Firewalls

- The Linux kernel includes netfilter, a framework for network traffic operations such as packet filtering, network address translation and port translation.
- Netfilter is the primary component in Red Hat Enterprise Linux 8 firewalls.
- A Packet filtering firewall reads incoming network packets and filters (allows or denies) each data packet based on the header information in the packet. The Linux kernel has built-in packet filtering functionality called Netfilter.

### `Nftables` enhances `netfilter`

- The Linux kernel also includes nftables, a new filter and packet classification subsystem that has enhanced portions of netfilter's code.
- The advantages of the nftables update is faster packet processing, faster ruleset updates, and simultaneous IPv4 and IPv6 processing from the same rules.
- Another major difference between nftables and the original netfilter are their interfaces.
  Netfilter is configured through multiple utility frameworks, including iptables, ip6tables, arptables, and ebtables, which are now deprecated.
  Nftables uses the single nft user-space utility, allowing all protocol management to occur through a single interface.

- The default firewall service in RHEL 7,8 is firewalld.
  It is a dynamic firewall manager which supports firewall (network) zones.
  The firewalld service has support for IPv4, IPv6, and for Ethernet bridges.
- Firewalld is a dynamic firewall manager, a front end to the `nftables` framework using the `nft` command.
  Until the introduction of nftables, firewalld used the iptables command to configure netfilter directly, as an improved alternative to the iptables service.
- In RHEL 8, firewalld remains the recommended front end, managing firewall rulesets using nft

### Advantages over iptables

Firewalld has the following advantages over iptables :

- Unlike the iptables command, the firewall-cmd command does not restart the firewall and disrupt established TCP connections.
- firewalld supports dynamic zones.
- firewalld supports D-Bus for better integration with services that depend on firewall configuration.

### Configuration options

The firewalld service has two types of configuration options:

- Runtime: Changes to firewall settings take effect immediately but are not permanent. Changes made in runtime configuration mode are lost when the firewalld service is restarted.
- Permanent: Changes to firewall settings are written to configuration files. These changes are applied when the firewalld service restarts.

### Configuration files

Configuration files for firewalld exist in two directories:

- `/usr/lib/firewalld`: Contains default configuration files. Do not make changes to these files. An upgrade of the firewalld package overwrites this directory.
- `/etc/firewalld`: holds system configuration files. These files will overwrite a default configuration.

### Firewalld Components

- Drop Zone: Any incoming packets are dropped, if we use this drop zone. This is same as we use to add iptables -j drop. If we use the drop rule, means there is no reply, only outgoing network connections will be available.
- Block Zone: Block zone will deny the incoming network connections are rejected with an icmp-host-prohibited. Only established connections within the server will be allowed.
- Public Zone: To accept the selected connections we can define rules in public zone. This will only allow the specific port to open in our server other connections will be dropped.
- External Zone: This zone will act as router options with masquerading is enabled other connections will be dropped and will not accept, only specified connection will be allowed.
- DMZ Zone: If we need to allow access to some of the services to public, you can define in DMZ zone. This too have the feature of only selected incoming connections are accepted.
- Work Zone: In this zone, we can define only internal networks i.e. private networks traffic are allowed.
- Home Zone: This zone is specially used in home areas, we can use this zone to trust the other computers on networks to not harm your computer as every zone. This too allow only the selected incoming connections.
- Internal Zone: This one is similar to work zone with selected allowed connections.
- Trusted Zone: If we set the trusted zone all the traffic are accepted.

### For each zone you can define the following features:

- Services: Predefined or custom services to trust. Trusted services are a combination of ports and protocols that are accessible from other systems and networks.
- Ports: Additional ports or port ranges and associated protocols that are accessible from other systems and networks.
- Masquerading: Translate IPv4 addresses to a single external address. With masquerading enabled, addresses of a private network are mapped to and hidden behind a public address.
- Port Forwarding: Forward inbound network traffic from a specific port or port range to an alternative port on the local system, or to a port on another IPv4 address.
- ICMP Filter: Block selected Internet Control Message Protocol messages.
- Rich Rules: Extend existing firewalld rules to include additional source and destination addresses and logging and auditing actions.
- Interfaces: Network interfaces bound to the zone. The zone for an interface is specified with the ZONE=option in the /etc/sysconfig/network-scripts/ifcfg file. If the option is missing, the interface is bound to the default zone.

### examples

`firewall-cmd --get-default-zone`
`firewall-cmd --get-active-zones |less`
`firewall-cmd --get-active-zones`
`firewall-cmd --zone=public --list-all`

#### add http services

`systemctl start httpd` start httpd

`firewall-cmd --zone=public --add-service=http` add http into firewall to allow access into website

`firewall-cmd --zone=public --remove-service=http` remove http from firewall

#### Port forwarding

`/etc/httpd/conf/httpd.conf`

> `Listen [ip addr]:[port]`

`firewall-cmd --zone=public --add-port=[port]/tcp` To add port

`firewall-cmd --zone=public --add-forward-port=port=80:proto=tcp:toport=12345`

## Masquerading, NAT
