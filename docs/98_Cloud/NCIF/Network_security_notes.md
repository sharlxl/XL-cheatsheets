# CIA Triad

<u>C</u>onfidentiality  
<u>I</u>ntegrity  
<u>A</u>vailability

# Least Privilege

When a user, system, process or application is only given the permissions necessary to complete its assigned task or functions and nothing more.

- Security groups
- Account standardization
- Account management processes & Procedures.

# Acceptable Use Policy

Defines what is acceptable and not acceptable, as well as penaties for performing non-acceptable activities.

# Intranet, Extranet and the Internet

Internet - Untrusted user
Extranet - Designed for business partners
Intranet - Only the organisation's employees can access. Used for internal buisiness activities, such as HR, accounting etc.

# VPN (Virtual Private Network)

> Computer with VPN Client -> Secure VPN tunnel -> VPN server

allows you to remotely connect to a private network or the internet in a secure encrypted manner.  
Tunneling basically means encapsulating one protocol within another to ensure that a transmission is secure.

VPN service encrypts your internet usage, provides online anonymity, and can trick your service into thinking you are in a different location

## Business types of VPN

1. Remote Access VPNs (Client to Site)
2. Site to Site VPNs (Intranet VPNs)

# Firewalls

Firewalls are the foundation of a defense-in-depth network Security strategy  
Design to protect organisations from network-based attacks  
Firewalls do this by filtering data packets that go through them  
Can be a standalone network device or software on a computer system.
meaning network-based(hardware) or host-based (software)

## 1st Gen Packet Filtering Firewalls

- Most basic
- They inspect all data packets that attempt to traverse it and based on predefined rules, packets are either allowed or denied.
- Those predefined rules are commonly called an Access Control List (ACL)
- Considered Stateless Firewalls
- Packet Filtering rules are common TCP/IP packet attributes
  - IP address
    Source IP
    Destination IP
  - TCP/UDP Port
    Source
    Destination
  - Inbound or Outbound
    Inbound Firewall NEtwork Interface
    Outbound Firewall Network Interface

## 2nd Gen Circuit-level Firewalls

(Stateful Inspection Firewalls)

- Operate at the Transport layer of the OSI Model (Layer 4) and monitor TCP Sessions
- Determine the legitimacy of a requested session by monitoring the 3 way handshake between packets
- Valid TCP sessions are allowed to pass, while invalid and terminated sessions are not.
  - Hackers can alter the 3 way handshake process for malicious reasons
  - If the firewall believes an attack is occuring , it will block the traffic

## 3rd Gen Application-level Firewalls

Also known as proxy servers, these firewalls operate at the Application layer of the OSI Model (Layer 7)  
Proxy serversc an provide the following services:

- Filter - Filters packet based on an application or service (FTP, SMTP, etc)
- Caching - Provides cashing services
  - When you request a page from a website, the proxy server will retrieve it and the cache it in its memory
  - the next time someone requests that website, the proxy server can retrieve it from its cache
  - saves Intranet bandwidth
- Logging - has the ability to log user activity for auditing purposes.

# Web Proxy Servers

Acts on behalf of computers within a LAN to retrieve web content from the internet.  
Specifically, proxy servers can provide the following services:

- Filtering - Can act as a filtering service, similar to a firewall. Can restrict and filter out unwanted websites.
- Content Checking - similar to an application-layer firewall. a proxy server can verify that the content is valid and doesnt dontain malicious content
- Caching

# Network intrusion Detection & Prevention (IDS/IPS)

Designed to detect attacks on a network and respond passively or actively  
IDS is passive, meaning it's response is logging and notifying  
IPS is Active, meaning it'll change the network environment to stop an attack, such as changing ACLs or closing processes, sessions, or ports
