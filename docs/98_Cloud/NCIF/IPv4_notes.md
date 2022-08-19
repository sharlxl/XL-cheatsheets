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
| ------- | ------- | ------- | ------- | ----- |
| Class A | Network | Host    | Host    | Host  |
| Class B | Network | Network | Host    | Host  |
| Class C | Network | Network | Network | Host  |
