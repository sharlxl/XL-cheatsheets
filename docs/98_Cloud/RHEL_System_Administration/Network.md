# Managing Networking

## configuring networking

NetworkManager is a daemon that moniotors and manages netowrk setting. In addition to the daemon, there is a GNOME Notification Area applet providing network status info.

config files is located in dir

> /etc/sysconfig/network-scripts

`nmcli` utility is used to create and edit connection files from cmd line

`nmcli dev status` OR `nmcli con show`

`ip addr show`

## Add a network interface

`nmcli con add con-name ens224 type ethernet ifname ens224 ip4 [0.0.0.0] gw4 192.168.64.1`

`nmcli con up ens224`

`nmcli dev dis ens224`

## Modify an Interface

`nmcli con up ens224 show` - show the network options

`nmcli con mod ens224 ipv4.addresses 192.168.64.130/24` - Change ipv4 addr

`nmcli con mod ens224 ipv4.method auto` - Change ipv4 method

## changing a hostname

`hostnamectl set-hostname [new hostname]`

## delete an interface

`nmcli con del ens224` - dels config file as well, have to set up ip and config again if needed.
