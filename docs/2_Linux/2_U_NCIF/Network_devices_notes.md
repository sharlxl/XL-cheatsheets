---
title: Network Devices
sidebar_position: 2
---

# Network Devices

## Network Interface Card (NIC)

the network adpater installed on your network device
provides the phusical and electrical, light or radiofrequency connections to the network media
can be an expansion card, usb device or built directly int the motherboard

## Hub

** Legacy Equipment no longer used
** replaced by switches
Used to connect devices together within a network
"Multi port repeater"

## Switches

OSI Layer2 (Intelligent Network Device)
Memorises the MAC Address of each device connected to it via a MAC address table, sometimes called a Content Addressable Memory (CAM) Table
MAC address Table = CAM Table
Pays attention to Souce and Destination MAC Addresses during communication Process.

- Traffic goes in one port and is repeated out to only destination port
- Designed for high bandwidth
- standard in today's network infrastructure.

Makes the network more secure.

## Wireless Access Point (WAP)

is a bridge that extends the wired network to the wireless network.
Data Link Layer 2 device
\*\* WAP is not a router.

## Wireless Ranger Extender

Extends the range of a wireless network by acting as a wireless repeater.
rebroadcasting radio frequencies from the wireless network it is associtaed with.

## Routers

OSI Layer 3 Device
Used to connect different networks together
routes traffic between networks using IP addresses
Uses Intelligent Decisions (Routing Protocols) to find the best way to get a packet of information from one network to another

## Modem (Modulator/Demodulator)

Modems modulate one signal to another, such as analog to digital
modulating a telephone analog signal into a ditigal signal that a router can understand
For example, modulating a tlephone analog signal into a ditigal signal that a router can understand.

## Small Office Home Office (SOHO)

All in one wireless router with expanded capabilities.
minimum - router, WAP, firewall, switch, DHCP server , NAT device.

## Media converter

converts on media type to another
Layer 1 device: Performs physical layer signal conversion.
Eternet to fiber optic media converters are commonly used.

## Firewalls

Foundation of a defense-in-depth network security strategy
Protects your network from malicious activity on the internet.
Prevent unwanted network traffic on different networks from accessing your network.
Firewalls do this by filtering data packets that go through them.
they can be a standalone network device or software on a computer system, meaning network-based(hardware) or host-based (software)

#### Packet Filtering Firewalls (1st gen)

Basic filtering rules
based on IP
white/black list

#### Circuit-level Firewalls (2nd gen)

Monitors Valid/Invalid TCP sessions

#### Application Layer 7 (NGFW - Next generation firewall) Firewalls (3rd gen)

Much more advanced

## Dynamic Host Configuration Protocol(DHCP) Servers

Automatically assigns IP address to hosts
makes admiistering a network much easier
an alternative is static IP addressing

## Voice over IP (VoIP) Endpoints

most phone system run over IP networks via dedicated protocols suchas session initiation Protocol(SIP)
VoIP endpoint devices are hardware devices(phones) or software, such as Cisco Jabber that allow you to make phone calls
