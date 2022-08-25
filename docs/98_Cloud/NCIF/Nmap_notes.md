# Network Scanning Basics and Advance Techniques

#### What problem does Nmap work to solve?

- Find systems and services on networks
- Discover info about these sytems and services
- Provide users with the flexibility to use in many situations
- Reliable tool for systems administrators, security professionals and hobbyists

#### Legal considerations

Legal if:

- you care scanning systems ansd network that you own
- you have been given explicit permission to scan targeted networks and systems

Can be illegal if:

- scanning networks that you do not own or have perssions to.
- degrading someone's network or system availability

## Reading Nmap output

Port States:

- Open
  An app is accepting connections
- Closed
  Nmap is able to make a request to the port, but no app is using it.
- Filtered
  Nmap can’t determine its state
  Something is blocking access to the port
- Unfiltered
  Port is accessible, but Nmap can’t decide if it's open or closed.
  Only shows when doing an ack scan
  Used to map firewall rule sets
- Open | Filtered
  NMap can't decide whether the port is open or filtered
  Port is open, but no response received
  Appears in UDP, IP protocol, FIn, Null and xmas scans only
- Closed | Filtered
  Nmap unable to determine whether closed of filtered
  Appears only in idle scans

Ping sweep:
`nmap -sP -oG [file name] [ip address]`

## Nmap Scan Phases

1. Target enumeration
2. Host Discovery
3. Reverse DNS Resolution
4. Port Scanning
5. Version Detection
6. OS Detection
7. Traceroute
8. Script scanning
9. Output

## Scan Types

#### Host Discovery Scans

#### OS Detection Scans

`nmap -O [ip address]`
`nmap -O --osscan-limit [ip address]`

- at least one open and one closed TCP port, then dont bother.
- saves time for a wide scan. Not significant for a single target

`nmap -O --osscan-guess [ip address]`
`nmap -O --osscan-guess --max-os-tries=1 [ip address]`

- default tries is 5
- Service Analysis scans

`nmap -sV scanme.nmap.org`
`nmap -sV --allports scanme.nmap.org`

- by default will see printer portas and skip, allports option will not skip anything.
- but this can cause the printer to be emptied out

`nmap -sV --version-intensity 9 scanme.nmap.org`

- default is 7

#### Port Scanning Techniques

- TCP SYN scan : `nmap -sS`
  Default scan used by nmap, also called the 'half open' scan  
   sends SYN packet
  waits for SYN/ACK or SYN response

- TCP Connect scan: `nmap -sT`
  Used when raw packet access is not available  
   slower than SYN scan  
   Completes the TCP 3 way handshake
- UDP scans: `nmap -sU`
  SLOW!! but the only way to get UDP ports
- Misc Scans
  - SCTP INIT scan: `-sY`
  - TCP NULL scan: `-sN`
  - FIN scan: `-sF`
  - Xmas scan: `-sX`
  - TCP ACKscan: `sA`
  - [For more](https://nmap.org/book/man-port-scanning-techniques)

#### Nmap Performance Tuning

`-T 0 (paranoid)| 1 (sneaky)| 2 (polite)| 3 (normal)| 4 (aggressive)| 5 (insane)`

#### Nmap Scripting Engine
