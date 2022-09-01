# Tuning profiles

- System administrators can optimise the performance of a system by adjusting various devices setting based on a variety of use case workloads.
- the tuned daemon applies tuning adjustments both statically and dynamically
- as a system administrator, you can used the tuned application to optimise the perf profile of your system for variety of use cases.
- Tuned is a service that monitors your system and optimizes the performance under certain workloads. The core of Tuned are profiles, which tune your system for different use cases.

#### Example

1. The hard drive is being used heavily during startup and login, but is barely used later when the user might mainly work with applications such as web browsers or email clients. Similarly, the CPU and network devices are used differently at different times. Tuned monitors the activity of these components and reacts to the changes in their use.

2. On a typical office workstation, the Ethernet network interface is inactive most of the time. Only a few emails go in and out or some web pages might be loaded. For those kinds of loads, the network interface does not have to run at full speed all the time, as it does by default. Tuned has a monitoring and tuning plug-in for network devices that can detect this low activity and then automatically lower the speed of that interface, typically resulting in a lower power usage.

#### Tuned Profile

`tuned`

|     Tuned Profile      | Purpose                                                                                                                        |
| :--------------------: | :----------------------------------------------------------------------------------------------------------------------------- |
|        balanced        | Ideal for systems that require a compromise between power saving & performance                                                 |
|        desktop         | Derived from the `balanced` profile. Provides faster response of interactive applications                                      |
| throughput-performance | Tunes the systems for maximum throughput                                                                                       |
|  latency-performance   | Ideal for server systems that require low latency at the expense of power consumption                                          |
|    network-latency     | Derived from the `latency-performance` profile. IT enables additional network tuning parameters to provide low network latency |
|   network-throughput   | Derived from the `throughput-performace` profile. Additional network tuning parameters are applied for max network throughput  |
|       powersave        | Tunes the system for max power saving                                                                                          |
|         oracle         | Optimised for oracle database loads based on the throughput-performance profile                                                |
|     virtual-guest      | Tunes the system for max performance if it runs on a virtual machine                                                           |
|      virtual-host      | Tunes the system for max performance if it acts as a host for virtual machines                                                 |
