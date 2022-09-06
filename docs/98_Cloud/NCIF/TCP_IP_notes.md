---
title: TCP/IP
sidebar_position: 6
---

# TCP/IP

### What is TCP/IP?

Transmission Control Protocol/Internet Protocol
designed for the internet but LANs can use it too
first 2 protocol defined in the suite
simpler - OSI is conceptual
TCP/IP is implemented.

### TCP/IP Protocols

|      Layers       |                                 Protocols                                 |
| :---------------: | :-----------------------------------------------------------------------: |
|    Application    | FTP, TFTP, DNS,HTTP(S), TLS/SSL, SSH, POP3, IMAP4, NTP,Telnet, SMTP, SNMP |
|     Transport     |                            TCP, UDP and ports                             |
|     Internet      |                     IP Adressing (Routing), ICMP, ARP                     |
| Network Interface |                            Eternet, Token Ring                            |

### Network Access Methods

#### CSMA

Carrier Sense

- checks network for communication
  Multiple Access
- Multiple devices using the network
  Collision Detection
- Wired
  Collision Avoidance
- Wireless

#### Token Ring

The Token

- passed between devices on the network
- only devices with token can send data
- token prevents network collisions

## Network Layer Protocols

### Address Resolution Protocol (ARP)

Resolves IP Address to MAC Addresses
Finds the hardware address of a host from a known IP address

- and vice versa(RARP)

```sh title="ARP COMMAND:"
arp- a
```

IF a computer knows a device IP address but not its MAC Address, it'll send a broadcast message to all devices on the LAN asking which device is assign that MAC address.

### Internet Protocol (IP)

An OSI Layer 3 Protocol that defines routing and logical addressing of packets that allow data to traverse WANS and the internet
It specifies the formatting of packets and the logical addresing schema

- IP address: IPv4 and IPv6

Its job is to connect different OSI layer 2 (switched) networks together
Provides end to end connectivity from one layer 2 networks to another via routers.
Its connectionless, therefore, unreliable(similar to UDP) - no continued connection
Each packet sent it independent of each other packet.

- TCP and other protocols provide a means to reassemble them properly.

Packets dont always follow the same path to their destination.

- They are sent via the most efficient route

Doesn't provide any error recovery or sequencing functionality

- Thats the job of other protocols.

### Internet control message Protocol (ICMP)

OSI Layer 3 IP companion 'error reporting' protocol within the TCP/IP suite of protocols
Just like IP, its connectionless.
Used to generate error messages to the sourse IP address when network issues prevent delivery of a packet.
Can report errors but not correct them
Commonly used by IT administrators to troubleshoot network connections with command-line utilities, including pin, pathping, and traceroute.
For IPv6, also used for:

- Neighbour Solictation and Advertisement Messages (Similar to ARP)
- Router Solicitation and advertisement messages

#### ICMP Message Types:

- Echo Request, Echo Reply. Commonly done by using the `ping`
  not useful if the end device uses a firewall that block ICMP messages.
- Destination Unreachable
- Source Quench
- Redirect Message
- Time exceeded
- Router advertisement, Router Solicitation (IPv6)

### Understanding Protocols, Ports and Sockets

#### Protocols

- computers communicate with each other with network protocols
- Protocols are rules governing how machines exchange data and enable effective communication
- In a OS, a protocol runs as a process or service

#### Ports

Ports are a logical constructs that bind a unique port number to a protocol process or service

#### Sockets

Sockets are a combination of an IP address and a port number eg 192.168..0:80 (Port: 80)

#### Why do we need ports and sockets?

Computers require ports because of network application multitasking
Because a computer may have only one IP address, it needs ports to differentciate network protocols and services running on it
TCP/IP has 65,536 ports available.

|    Port Type     | Port Numbers  |               Description               |
| :--------------: | :-----------: | :-------------------------------------: |
| Well known Ports |    0-1023     |      Assigned to weill known ports      |
| Registered Ports |  1024-49,151  |    registered to specific Protocols     |
|  Dynamic Ports   | 49,152-65,535 | Not registered and used for any purpose |

#### Popular Protocols & Port Numbers

|                        Service. Protocol or App                        | Port Numbers | TCP / UDP |
| :--------------------------------------------------------------------: | :----------: | :-------: |
|                                  FTP                                   |    20,21     |    TCP    |
|                            Secure FTP(SFTP)                            |      22      |    TCP    |
|                                  SSH                                   |      22      |    TCP    |
|                                 Telnet                                 |      23      |    TCP    |
|                                  SMTP                                  |      25      |    TCP    |
|                                  DNS                                   |      53      |    UDP    |
|                                  DHCP                                  |    67,68     |    UDP    |
|                                  TFTP                                  |      69      |    UDP    |
|                                  HTTP                                  |      80      |    TCP    |
|                                  POP                                   |     110      |    TCP    |
|                                  NTP                                   |     123      |    UDP    |
|                                 IMAP4                                  |     143      |    TCP    |
|                                  SNMP                                  |     161      |    UDP    |
|                                  LDAP                                  |     389      |    TCP    |
|                                 HTTPS                                  |     443      |    TCP    |
|                       Server Message Block (SMB)                       |     445      |    TCP    |
|                                 LDAPS                                  |     636      |    TCP    |
|                                  RDP                                   |     3389     |    TCP    |
| ITU Telecommunication Standardization Sector A/V Recommendation(H.323) |     1720     |    TCP    |
|                   Session Initiation Protocol (SIP)                    |  5060,5061   |    TCP    |

`netstat -aon`
`net start`

### TCP vs UDP

Transport layer protocols

- TCP(Transmisson Control Protocol): Connection oriented
- UDP(User Datagram PRotocol): Connectionless

TCP is most widely used Transport layer protocol because it is connection-oriented, which provide packet delivery reliability (guaranteed delivery)

UDP being connectionless is considered to be unreliable. however more light wegight than TCP and often used for streaming or real-time data

#### TCP Reliability

- 3 way handshake
  creates a virtual connection between the source and destination before data is sent.
  a connection must be established before data is transmitted
  - SYN -> SYN/ACK -> ACK
- Acknowledgement
  required before next segment is sent.
- Checksum: detects corrupt data
- Sequence Numbers: detects missing data and reassembles them in correct order
- Retransmission: retransmit lost of corrupt data

\*\*TCP header is 20 bytes while UDP header is 8 bytes

#### UDP "Best Effort"

a scaled down, economic ver of TCP

- connectionless & unreliable
- No data retransmissions

Faster than TCP

- smaller header & connectionless

Used a lot for streaming real-time data, network management protocols when performance is more important than reliability.

`net lookup`

### Common Application layer protocols

#### Management Protocols

##### DNS

Protocol that is used to resolve a domain name to its corresponding IP address.
uses UDP port 53 by default
Allow us to use domain names instead of memorising the IP address.
even if IP address changes, DNS helps with rerouting

##### DHCP

it helps you dynamically assigns IP address configuration to devices on a network

- IPaddress
- subnet mask
- default gateway
- DNS server

##### NTP

automatically synchronise a system's time with a network time server.

- important for time dependent netowkr and applications and protocols
- if system confirgured with incorect time, it may not be able to access networks services

##### SNMP

Used to monitor and manage network devices
Allows admins to monitor and manage network devices and traffic
allows network devices to communicate information about their state

- memory
- cpu
- bandwidth

##### LDAP

protocol that provides a means to access and query directory service systems

- usernames, pass words, computer accounts.

typically Unix/Linuix based ot Microsoft Active directory -based

##### LDAPS

LDAP over SSL
secure version(encrypted)

##### SMB

Server Message block
Network and file sharing protocol commonly used in Microsoft environments
Allow systems to share their files and printers with other systems

#### Remote communication protocols

##### Telnet

\*\*Legacy protocol, not really used anymore.

Data is transferred in clear text - therefore insecure.
Largely replaced by SSH

Today widely used to access managed network devices, such as routers via a serial connection.
used in physically connected devices.

##### SSH (secure shell)

a Cryptographic protocol ised to securely connect to a remote host

- utilises a terminal console.
- typically Unix and Linux Machinces but also avail in Windows and Mac OS.

Encrypts data with PKI(public key infrastructure), considered a secure replacement for Telnet.

##### RDP (Remote desktop protocol)

a Microsoft protocol that allows users to remotely connect to , view, and control a remote computer from a windows desktop
built into Microsoft operating System.

#### FTP ( File transfer protocol)

- FTP
- (secure) SFTP
- (trivial) TFTP

##### FTP

used to transfer file betweeen systems.
Legacy protocol, data is not encrypted, just like telnet.

- slowly replaced by SFTP

can authenticate with a username and password or utilise anonymous logins
Full-featured functionality:

- view , list, add, delete, etc fioles and folders.

##### SFTP

a secure cryptographic ver of FTP that uses SSH - provides file transfer over SSH
(uses same port as SSH)

##### TFTP

a bare boned ver of FTP for SIMPLE downloads.
Doesn't support:

- authentication
- directory navigation

Requires that you request the EXACT file and LOCATION
Often used to transfer software images for routers and switches during upgrades.
(uses port 69)

#### Email Protocols

##### SMTP (Simple mail transfer protocol)

used to deliver emails from an email client to a destination email server
can be used to use encryption
uses port 25 by default

Send mail -(SMTP)-> email server - (another protocol)-> recipient

##### POP3 (Post office protocol 3)

used to retrieve emails from an email server
can be configured to use encrytption
uses port 110 by default

##### IMAP (Internet Message Access Protocol)

another email protocol that is quickly replacing POP3
allows users to access email on servers and either read the email on the server or download the email from multiple different devices
web-based email clients, such as gmail, uses IMAP
uses port 143 by default

#### Webbrowser Application protocols

##### HTTP (Hypertext Transfer Protocol)

protocol that provides browsing services for the WWW
-data is sent in plain text

##### HTTPS

uses SSL/TLS
a secure version of HTTP, encrypts HTTP conent
utilises PKI
uses port 443 by default
