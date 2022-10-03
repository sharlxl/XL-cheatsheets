---
title: VPN
sidebar_position: 8
---

VPN provides a point to point connection between a private network's components by using a public network, such as the internet

# Tunneling protocol

PPTP(Point to point tunneling protocol) - TCP port 1723
L2TP(Layer 2 tunneling protocol)/IPsec(IP security) - UDP port 500, 4500, 1701
SSTP - TCP port 443
IKEv2 - UDP port 500

# Authentication Protocol

PAP - uses plain text passwords

- Least secure auth protocol
- vendor-neutral

CHAP - Challenge-response authprotocol that uses industry-standard MD5 hashing scheme

- vendor-neutral
- NOT secure
- better than PAP, in that the password is not sent over the PPP link
- requires a plaintext ver of the password to validate the challenge response. Does not protect against remote server impersonation

MS-CHAPv2 - upgrade of MS-CHAP. provides 2 way auth, aka mutual auth.

- encrypted
- provides stronger security than CHAP
- username & password

EAP - Allows for arbitrary auth of remote access connection through the use of auth schemes, known as EAP types

- Offers the stronges security by providing the most flexibility.
