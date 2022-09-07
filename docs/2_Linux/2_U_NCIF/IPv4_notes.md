---
title: IPv4
sidebar_position: 7
---

# IPv4

## Understanding IPv4

## Anatomy

Made up of 32 binary bits, can be divided into a network portion and a host portion with the helpf of a subnet mask

- the 32 binary bits are broken into four octets

(1 octet = 8 bit = 1 byte)
(4 octet = 32 bits = 4 bytes)
each octect is converted into decimal and seperated by a period.
an IP address is said to be expressed in dotted decimal format

#### Network and Host Portion

`IP address = Network address + Host Address`

An IP Address is broken down into 2 parts

- Network Address
  Uniquely identifies each network
  eg. Street name

- Host address
  Uniquely identifies each machine on a network
  eg. Unit number

#### Address components

Each device on a network is assign an IP address, subnet mask and default gateway:

- IP address
- Subnet Mask - Used by the device to determine what the subnet it's on, specifically the network and host portions of the IP address
- Default Gateway - The IP address of a network's router that allows devices on the local network to communicate with other networks.

## Binary maths (Basics)

need to know basic binary maths to perform subnetting
as well as to understand how IPv4 addresses work.

`128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255`

### Binary to Decimals

|  Binary  |            Calculation             | Decimal |
| :------: | :--------------------------------: | :-----: |
| 11111111 | 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 |   255   |
| 10101010 |  128 + 0 + 32 + 0 + 8 + 0 + 2 +0   |   170   |
| 10000011 |  128 + 0 + 0 + 0 + 0 + 0 + 2 + 1   |   131   |

### Decimal to Binary

| Decimal |           Calculation            |  Binary  |
| :-----: | :------------------------------: | :------: |
|   192   | 128 + 64 + 0 + 0 + 0 + 0 + 0 + 0 | 11000000 |

128| Is the decimal > the first bit?
64 | Is the decimal > the first bit + second bit?
etc

`Yes = 1`
`No = 0`

## IPv4 Addresses and Subnet mask

### Address Class(Simplified)

| Class | Network Bits | Host Bits |        Address Range        |
| :---: | :----------: | :-------: | :-------------------------: |
|   A   |      8       |    24     |  1.0.0.0 - 126.255.255.255  |
|   B   |      16      |    16     | 128.0.0.0 - 191.255.255.255 |
|   C   |      24      |     8     | 192.0.0.0 - 223.255.255.255 |

|         | 8-bit   | 8-bit   | 8-bit   | 8-bit |
| :------ | :------ | :------ | :------ | :---- |
| Class A | Network | Host    | Host    | Host  |
| Class B | Network | Network | Host    | Host  |
| Class C | Network | Network | Network | Host  |

### Address Classes (Detailed)

|  Class  | Leading Bits  | NetWork Bits | Remaining Bits | No of Networks | Host per Network | Default Subnet Mask |
| :-----: | :-----------: | :----------: | :------------: | :------------: | :--------------: | :-----------------: |
| Class A |   0(1-126)    |      8       |       24       |    128(2⁷)     | 16,777,216(2²⁴)  |      255.0.0.0      |
| Class B |  10(128-191)  |      16      |       16       |  16,384(2¹⁴)   |   65,536(2¹⁶)    |     255.255.0.0     |
| Class C | 110(192-223)  |      24      |       8        | 2,097,152(2²¹) |     256(2⁸)      |    255.255.255.0    |
| Class D | 1110(224-239) |      -       |       -        |       -        |        -         |          -          |
| Class E | 1111(240-255) |      -       |       -        |       -        |        -         |          -          |

### CIDR Notation

(Classless Inter-Domain Routing)
A methodology for subnetting
"slash" Notation tells you how many bits are associated with the subnet mask

- 8/ = 11111111.00000000.00000000.00000000
  OR 255.0.0.0

  192.168.1.0 /24 = 255.255.255.0
  10.1.0.0 /16 = 255.255.0.0
  196.10.10.0 /25 = 255.255.255.128

### The Power of 2

|        |          |          |          |
| :----: | :------: | :------: | :------: |
|  2=2¹  |   2²=4   |   2³=8   |  2⁴=16   |
| 2⁵=32  |  2⁶=64   |  2⁷=128  |  2⁸=256  |
| 2⁹=512 | 2¹⁰=1024 | 2¹¹=2048 | 2¹²=4096 |

#### Power of 2 to determine Network Hosts

> Hosts Per Network = 2<sup>h</sup> - 2

Class A - Hosts = 24 bits = 2²⁴ - 2 = 16,777,214 (useable IP addresses)

### Public vs Private IPv4

|                  Public                   |                         Private                          |
| :---------------------------------------: | :------------------------------------------------------: |
|              Original design              |                                                          |
|           Registered public IP            |          Unregistered - Free for use by anyone           |
|    Assigned by ISP to business or home    |     Designed for use within private internal network     |
| Globally unique(Web/DNS servers, Routers) |              Can be use over and over again              |
|                                           |       Cannot be used or routed on a public network       |
|                                           | utilises NAT to "speak" to public networks ie, internet. |

The world was running out of public IP addresses by 1990s

### The Loopback address

127.0.0.0 to 127.255.255.255 is reserved for loopback AKA localhost address.
127.0.0.1 is typically confirgured as the default loopback address on operating systems,

used for diagnostic purposes to check that TCP/IP is correctly installed on a host operating system.
If you can sucessfully ping 127.0.0.1 or any IP within the loopback range, then TCP/IP on your comp is properly working.
`ping 127.0.0.1`
`ping localhost`
`ping loopback`

### IPv4 to IPv6 Tunneling Protocols

#### 4to6

Encapsulate IPv4 data into IPv6 Tunnel

#### 6in4

Encapsulate IPv6 data into n IPv4 Tunnel and can traverse IPv4 NAT

#### Teredo

Microsoft Windows IPv6 tunnelign protocol similar to 6in4 that supports NAT

#### Miredo

A Linux and unix based open source version of Teredo

## Assigning IP addresses

### Static vs Dynamic

| Static                    | Dynamic                                                         |
| :------------------------ | :-------------------------------------------------------------- |
| IP is manually configured | Dynamically configured                                          |
|                           | - DHCP                                                          |
|                           | - APIPA                                                         |
|                           | - Stateless server                                              |
| Doesnt Change             | Auto-Configuration                                              |
| Commonly used:            | Commonly used for:                                              |
| - DNS Servers             | <b>end-user devices</b> that doesnt require a static IP address |
| - Web Servers             |                                                                 |
| - Network Printers        |                                                                 |
| - Default Gateway(Router) |                                                                 |

### DHCP

#### Understanding the DHCP DORA Process

1. DHCP discover
2. DHCP Offer

> IF no DHCP server is available, the client will use Automatic PRivate IP addressing (APIPA)

3. DCHP Request
4. DHCP Acknowledgement

When configuring DHCP, you'll typically have the option to configure"

- IP address Scope/pool
- Default Gateway (Router)
- DNS Servers
- IP address Exclusions
- Mac Address Reservations
- Lease Duration

#### DHCP Relay Agents

A system used to forward DHCP requests and replies between a DHCP server and clients when the server is on a different network
This allows you to not have a DHCP server on each network

### APIPA

Windows Operating System Feature
Allows DHCP-configured clients to self-configure IP addresses if no DHCP server is available on the network.
Windows OS can self -configure an APIPA IP address & subnet mask.

- ClassB IP address Range: ---.---.-.1 to ---.---.---.254
- Subnet Mask: 255.255.0.0

\*\* APIPA addresses are link-local, meaning they're not routable
