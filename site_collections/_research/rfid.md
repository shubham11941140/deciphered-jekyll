---
title: Lightweight Authentication in RFID Systems
image: /assets/images/rfid.jpg
abstract: |
  This project involved building lightweight authentication system focusing on RFID technologies such as MIFARE etc.
  `Currently Progressing`<br>

  Great 🍺
  ---
  Follow our progress by starring out repo for the latest commits.

layout: research_layout
github: https://github.com/theboxahaan/loauth
---

## Project Overview

> Implement the Lightweight Cryptographic (LWC) Protocols to be deployed on the 5G testbed. These will be used for authentication of IoT nodes focusing on the use case of RFID systems.

The first part of the project entails implementing LWC authentication protocols for the Internet of Things (IoT) nodes on the network. We will be specifically focusing on the case of RFID, where the readers will act as the IoT nodes at the edge of the network. Figure-1 is a schematic diagram providing a bird's eye view of our proposed framework. We can see multiple instances of

### Performance Requirements

The protocol should have a high throughput and a light memory and computational footprint. The security guarantees should be reasonably provided.

<div align="center">
<img src="https://user-images.githubusercontent.com/32961084/88246594-8d9ac280-ccb8-11ea-9198-f02eae243838.png" width=800 >
</div>
Client → RFID Reader;
Server → Authentication Server;

Before the client can make any requests, it must be authenticated with the server.
Instead of implementing a cookie mechanism to maintain sessions, we used a WebSocket server to keep the connection alive after successful authentication. This has the added benefit of two-way communication between the client and the server.

Another future implementation scope is that of pluggable authentication protocols. Developers can implement and deploy their own protocols using the library; however, that protocol must be implementable as a general challenge-response based protocol.

### Objectives

- Make a detailed study of various protocols, their efficiency, throughput and memory usage on constrained devices. For the case of RFID, different protocols would be implemented and tested between the server and the gateway (esp8266) controller. Timing data would be collected for the different protocols and compared to the existing standards.
- Using the data collected from previous study, improve one protocol and then compare it to its previous performance.
  Conduct the above test on different web servers, with different devices and different connection densities.

### Assumptions

1. IoT Node has sufficient computing and memory resources to carry out Ultra Lightweight / Lightweight Authentication Protocols.
2. RFID Tag is assumed passive with no programmable ability.
3. MicroPython Enabled IoT Node
4. IoT Gateway has sufficient computing and memory resources to handle multiple nodes on the network.
5. IoT Nodes can host baic HTTP Clients.
6. IoT Gateway can host basic HTTP servers and clients.
7. Each hardware platform has a Trusted Platform Module to enable secure boot and secure upgrade.

## `loauth`

_loauth_ is a lightweight extensible library designed to provide ease of implementations using challenge-response communication protocols.
Written in python, we are actively looking at developers to port it for various hardware platforms. Below is a test snippet for the Base Class of the loauth authentication library.

```

import hashlib
import hmac as hm
import Cijfer
class test(Cijfer.cijfer):
    def sign(self, key, msg):
        return hm.new(key, msg, hashlib.sha256).digest()

    def verify(self, key, msg, sign):
        return hm.compare_digest(sign, hm.new(key, msg, hashlib.sha256).digest() )

```

Fork it from our GitHub repository and contribute :D

<a class="github-button" href="https://github.com/theboxahaan/loauth" data-color-scheme="no-preference: light; light: light; dark: dark;"  aria-label="de.ci.phe.red on GitHub">loauth On GitHub</a>
