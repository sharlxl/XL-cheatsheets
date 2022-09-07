---
title: Containers
sidebar_position: 12
---

# Containers

## Virtualisation

![virtualisation](./images/virtualisation.png)

Libraries, config files or services provided by their runtime environment  
Packaging systems like RPM are used to help manage application dependencies

The major drawback to traditionally deployed software applications is that these dependencies are entangled with the runtime environment  
An app might require versions of supporting software that are older ot newer than the software provided with the operating system.

VM's are bulky, each requires its own operating systems, so is typically gigabytes in size and difficult to maintain and upgrade.

## Containers

![Containers](./images/containers.png)

One way to resolve these conflicts is to package and deploy the app as a container.

A container is a set of one or more processes that are isolated from the rest of the system
Software containters are a way to package apps to simply deployment and management.

Run directly on the operating system, sharing hardware and OS resources accross all containers on the system.  
This enables apps to stay lightweight and run swiftly in parallel.

Require far fewer hardware resources than VM, which also makes them quick to start & stop and reduces storage requirements.

## Implementation of containers

- Control groups (cgroups) for resource management
- Namespaces for process isolation
- SElinux and Seccomp(Secure Computing mode) to enforce security boundaries

## Planning of containers

- Containers are an efficient way to provide reusability and portability of hosted apps
- Can be easily moved from one environment to another, such as from development to production

## Running Containers from container Images

Containers runs from container images. Container images serves as blue prints for creating containers.
Container images package an app together with all its dependencies, such as:

- System Libraries
- Programming language runtimes
- Programming language libraries
- Configuration settings
- Static data files.

Container images are unchangeable or immutable and are built according to specifications, such as the OCI (Open Container Initiative)

### Managing containers with Podman

RHEl provides a set of container tools:

- podman
- skopeo
- Buildah

These tools are compatible with OCI. can be used to manage any linux containers created by OCI-compatible container engines, such as Docker.

## Selecting Container Images and Registries

A Container registry is a repository for storing and retrieving container images.  
Container images are uploaded, or pushed, to a container registry by a developer.  
These can be downloaded, pulled from the registry to a local system so that you can use them to run containers.
