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
