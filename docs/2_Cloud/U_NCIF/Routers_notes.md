---
title: Routers
sidebar_position: 10
---

# Routers

## Static vs Dynamic

#### Static

Simplest form of routing  
static routes are manually entered by a network administrator  
Ideal for small networks with very few routes that rarely change

- there is no overhead like there is with dynamic routing

Can be problematic for larger networks or if the network regularly changes

- all changes must be made manually, which is time consuming and can be error-prone

#### Dynamic routing

An automated form of routing that uses routing protocols to :

- Populate router's routing table
- Make the most efficient routing decision
- Updating the routing table whenever the network changes

Automatic & hands off

- all routing decisions are handled by protocol

Ideal for larger, and more complex networks

##### Distance vector

##### Link state

##### Hybrid

## IGPs & EGPs

#### AS (Autonomous system)

Autonomous = independent Entity (organisation)

- university, corporation, gov agency

Routers are usually part of an autonomous system (AS)

- IP routes under common control

An AS is a connected group of one or more IP prefixes run by one or more network operators with a single and clearly defined routing policy (Single organisation)

### Interior Gateway Protocols (IGP)

Used within a single AS (your org)

- not intended to route between Autonomous systems

### IGP Protocols

#### Distance Vector

- RIP (Routing Information Protocol)
- EIGRP (Enhanced interior Gateway Routing Protocol)  
  Distance-vector routing protocols use distance as their metric for making routing decisions - Distance = Hop Count - Hops are the number of router that a packet passes through from its source to its destination

##### RIP

A long established distance-vector protocol with three versions  
supports a max of 15 hops to prevent routing loops - doesnt scale well due to limitation  
Sends a full copy of its routing table to directly connected routers every 30 seconds. - slow network convergence times, which can lead to potential routing loop issues - leads to unecessary network traffic and high router CPU utilisation

##### EIGRP

A Cisco proprietary routing protocol that only works on cisco routers  
Not a true distance-vector routing protocol - utilises hop count metres, but also reliability, bandwidth, load, and delay metrics - can be considered an advanced distance vector or hybrid routing protocol  
Has a default hop count of 100 and a max of 255  
Support classless routing and VLSM  
Very fast converging and very scalable for larger networks

#### Link state

- OSPF (Open Shortest Path First)

Builds a map for the entire network.  
Utilise link-state advertisement (LSAs) to accomplish this: - Routers share information with all other routers on the network via LSA - This allows them to build a complete network map  
Once the network map is built, routers only update each other when there is a change to the network.  
Otherwise, they don't communicate , except with a periodic 'hello' packet, so the other routers know they are up and functioning.  
This leads to faster network convergence times that support larger networks

##### OSPF

Open standard link-state routing protocol  
Well suited for large networks with <u>multiple redundant paths</u>  
builds a topological routing tree, call a <b>shortest-path tree</b>  
Subdivides a larger network into areas where routers share information with other routers in their designated area: - Minimises routing update traffic and improves network convergence times  
Uses 'cost' metrics to determine the 'best' route by including link state and speed.  
Supports classless addressing and VLSM (aka subnetting)  
Has unlimited hop count

### Exterior Gateway Protocols (EGP)

Used to route between AS

- usually used by ISPs

BGP (Border gateway protocol)

- almost all ISP uses BGP as the ECP

### Border Gateway Protocols (BGP)

The only EGP in widespread use today  
Considered the internet's core routing protocol - Supports IPv4 & 6 - Highly Scalable  
Often called a <b>path-vector (hybrid)</b> routing protocol - Each ISP is assigned a unique As number - Uses the number of AS hops rather than individual router hop as its metrics  
Utilises the BGP BEst Path Selection algorithm to identify the best route  
Routing protocol from AS to AS  
when you connect to the internet, you are moving from on AS to another

## Routing Tables and AD

Routing Table components:

- Type
- Destination Network ID & Subnet mask
- Router Interface
- Metric

Administrative distance (AD)

- Router use AD to rate the overall trustworthiness of a route
- AD's can have a value ranging from 0 to 255, where lower is better, based on the type of route
- IF a router recieves routing table updates from 2 different sources, it'll utilise the one with the lower AD.

### Directly connected Routes

- Networks that are directly connected to the router

### Remote Network Routes

- Networks that aren't directly connected to the router

### Default routes

- Routes when no match is found in the routing table
- A static route
- if there is not match -> forward the packet on via the default route.
- commonly called the gateway of last resort
- the following addresses are used to represent the default route in a routing table:
  IPv4: 0.0.0.0/0  
   IPV6: ::/0

## The Default route

`tracert < IP Address >`
