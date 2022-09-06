---
title: DNS
sidebar_position: 8
---

# DNS servers

Domain Name System
Provides TCP/IP name resolution services, which is the process of translating host/domain names into their corresponding IP address and vice versa.

something.com <-> 162.0.200.10

## Fully Qualified Domain Names (FQDN)

a FQDN is used to uniquely identify a host one the internet.
composes of 3 components:

- Host Name (www)
- Domain Name ( InstructorAlton.com)
- Top-Level Domain (.com OR .net OR .org etc)

multiple levels of domain names.

- www.instructoralton.com
- mail.instructoralton.com
- hq.instructoralton.com -> printers.hq.instructoralton.com
  etc

## DNS Hierachy

|                  |                       |
| :--------------: | :-------------------: |
|                  |    Root DNS Server    |
| Top Level Domain |    com/edu/net/org    |
|   Second level   |     Microsoft.com     |
|   Third level    | technet.Microsoft.com |

## Common DNS Record Types

|    Record Types    |                                                      Description                                                      |
| :----------------: | :-------------------------------------------------------------------------------------------------------------------: |
|      A (IPv4)      |                                       Resolves a domain name to an IPv4 Address                                       |
|    AAAA (IPv6)     |                                       Resolves a domain name to an IPv6 Address                                       |
|    PTR(Pointer)    |                                        Resolves an IP address to a domain name                                        |
|   CNAME (Alias)    | Resolves one domain name to another domain name, allowing multiple domain names to be resolved to the same IP address |
| MX (Mail Exchange) |                                            Used for mail exchange servers                                             |
|  NS (Name Server)  |                                              Identifies DNS Name Servers                                              |

`nslookup`
