# National Infocomm Competency Framework(NCIF)

What is a network?

- network is nothing more than two connected comouters sharing resources with one another.
- physical connection/component(wires, cables, wireless media)
- logical connection/component(data transporting accross physical media)

## Computer Networks

#### Basic networking rules.

- Computers in the same network must use the same procedures for sending and recieving data. - Communication Protocols
- Data must be delivered uncorrupted. IF it is corrupted, it is useless. (there are exceptions.)
- computers in a network must be capable of determining the origin and destination of a piece of information(ie, IP/Mac Address)

### Personal Area Network (PAN)

ultra small network used for personal use.

- smartphone to laptop
- smart phone hands free car calling.
- smart watch to smartphone

### Local Area Network (LAN)

a computer network within a small geographical area.

- home networks
- small office networks

### wireless Local Area Network (WLAN)

A LAN that is fully dependent on wireless connectivity.

### Campus Area Network (CAN)

Computer network of multiple interconnected LANs in a geographical area

### Metropolitan Area Network (MAP)

Lareger than a campus area but smaller than a wide area network.

### Wide Area Network (WAN)

A Computer network that expands over a large geoghraphical distance.
Typically accross multiple cities and countries.

## NetWork Achitecture

### Peer to peer

- no dedicated servers.
- no centralised control over shared resources.
- All computers can act as either a server or client.
- easy to set up and common in homes and small business.

### Client-server

- server provide resources.
- client recieve resources.
- Server provide centralised control over network resources.
- CENTRALISED user accounts, security, and access controls to simplify network administration
- difficult to sertup and requires an IT administrator.

## Computer Networking protocols

Computer communicate with each other with network protocols.  
Protocols are rules governing how machines exchange data and enable effective communication.

#### Physical protocols

describe the medium (wiring), the connections (RJ-45 port), and the signal (voltage level on a wire)

#### Logical Protocols

Software controlling how and when data is sent and recieved to computers, supporting physical protocols.
computer networks depend on many diffrent types of protocols in order to work properly.

Example of common <u>TCP/IP suite of protocols</u>

- Web Communication : <i>HTTP</i>
- E-mail: <i>POP3, SMTP, IMAP</i>
- File transfers: <i>FTP</i>

## The OSI Model

The Open System Interconnection (OSI) Reference Model

- gives us a guide to understand how networks operate
- it is only a REFERENCE model.
- not implemented IRL, TCP/IP is being implemented instead.

### OSI Model stack

THe OSI Model breaks down the complex task fo computer to computer network comms into 7 layers.

#### Lower(Media) Layers (NetWork)

1. (Bit) Physical Layer
2. (Frame) Data Link Layer
3. (Packet) Network Layer

#### Upper(Host) Layers (Computer)

4. (Segment) Transport Layer
5. (Data) Session Layer
6. (Data) Presentation layer
7. (Data) Application layer

### TCP/IP

The most common used protocol suite in the networkign world.
standard for computer networking, based on a 4 layer model that is similar to OSI

#### MAc addresses

- Physical address
- physically burned on the NIC
- OSI layer 2
- Local LAN communication

#### IP Address

An IP Address is a logical address used in order to uniquely identify a device on an IP network
a device on an IP address.

- its a network layer address associated with routing.
- OSI layer 3
- TCP/IP layer 2
- WAN communication

## Duplex Communication

#### Half duplex

Can send and recieve data but not at the same time

#### Full duplex

Can send and recieve data simultanenously

## Network Transmission types

- Unicast (One to One)
- Multicast (One to Many)
- Broadcast (One to All)

## Eternet

Refers to a family of standards that define the physical and logical aspects of the world most popular type of LAN
The standard communication protocol for bnuilding a local area network(LAN)

- Physical (cabling, connectors, equipements)
- Logical (Network Access Method)

#### Physical Topologies

describe the placement of network devices and how they are physically connected.

#### Logical Topologies

describes how data flows throughout a network

### Wired Topology

#### Bus Topology (NO longer being used)

All devices are connected to a single coaxial network cable
only one end device can be active on the network at the same time.
a single break can takedown the entire network.
terminator are required at both ends of the cable to prevent a signal bounce.

#### Ring Topology

All devices are connected in a circular fashion
Data travels from node to node with each computer handling data, either unidirectional or bidirectional.
failure of a single node can take down the entire network

#### Star Topology

All devices are connected to a central connecting device, which is usually a switch
Popular in today's network.
used in most large and small networks
central device is a single point of failure.

#### Meshed Topology

Each device is connected to every other device by seperate cabling.
Highly redundant and fault tolerance.
Expensive to install
Commonly used in enterprise networks and WANs

- Partial mesh
- Full Mesh

## Wireless Toplogies

Utilise radio frequencies(RF) to communicate

#### Adhoc

Peer to Peer (P2P)
no Wireless Access Points(WAP)
PAN

#### Infrastructure

Wireless network that uses a WAP as its central connecting device
common in home and small offices

#### Mesh

Just like wired mesh design, wireless mesh network utilizes several wireless access points to create a robust wireless network that is

- scalabe
- reliable
- self healing
  common in larger homes and businesses
