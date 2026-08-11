---
title: "The Secure Endpoint System: Decoupling Session Security from an Untrusted Host"
description: "How to keep a user session confidential and intact even when the computer running it is fully compromised."
pubDate: 2026-06-17
tags: ["security", "cryptography", "hardware", "systems"]
---

The Secure Endpoint System is a hardware-enforced architecture for secure sessions. Its premise is that an organization can give a user access to sensitive data from a computer it cannot trust and still guarantee the security of the session — not by hardening that computer, but by ensuring the session never depended on it in the first place. This post explains the problem the system addresses and the solution it proposes.

## The problem: the untrusted endpoint

Organizations must give people access to sensitive data and applications, but they cannot guarantee the integrity of the computer doing the work. Remote work, personal devices, and malware that targets endpoints have made this an unavoidable condition rather than an edge case.

The core difficulty is that if the host is compromised — its operating system, its I/O stack, or its browser — then any security software running on that host is compromised along with it. Encryption does not close the gap, because the attacker does not need to break it. Malware can read the data as plaintext on either side of the cryptography:

- **Before encryption**, by capturing input as it is entered — a keylogger or a man-in-the-browser.
- **After decryption**, by reading the rendered output — screen-scraping the display.

In both cases the session's encryption is bypassed rather than defeated. This is the weakness shared by the established categories of endpoint security — Virtual Desktop Infrastructure, Remote Browser Isolation, Secure Access Service Edge, hardware enclaves such as Intel SGX, and Endpoint Detection and Response. However they differ, each runs as software on a general-purpose host and ultimately depends on the integrity of that same host. A sufficiently deep compromise undermines all of them.

## The proposed solution: take the trusted path off the host

The Secure Endpoint System decouples session security from the host's security posture by separating the trusted I/O path from the untrusted computer, both physically and cryptographically. Two interconnected ideas do the work.

### Hardware-enforced I/O segregation

Input and output are handled by separate, physically unidirectional devices rather than by the host. A transmit-only **Secure Input Device (SID)** captures and encrypts user input. A receive-only **High Security Side (HSS)** decrypts and renders all output. The two are joined by unidirectional hardware — a tamper-resistant fiber-optic bridge, independent power and clocks, and TPM 2.0 roots of trust — so the physical pathways malware would need to intercept plaintext input or output simply do not exist. The user's computer is left handling only encrypted data it cannot read.

### A three-node cryptographic trust model

The hardware separation is made workable for a live, interactive session by a protocol — **Synchronized ACK** — that establishes a single shared session key across three trusted nodes: the SID, the HSS, and a cloud-based **Secure Access Gateway (SAG)**. Input flows one way (SID→SAG) and output flows the other (SAG→HSS), over two distinct unidirectional channels. The user's computer and its browser are reduced to relays that carry only opaque, encrypted data, with no visibility into the session.

Underneath, the protocol relies on standard, well-vetted primitives: static-ephemeral ECDHE on NIST P-384 for forward secrecy, AES-256-GCM for authenticated encryption, monotonic sequence numbers for replay resistance, and periodic key rotation to bound the lifetime of any single key. The result is the architecture's central claim: the confidentiality and integrity of the session are demonstrably independent of whether the host computer is secure.

### The difficulty the protocol has to solve

The non-obvious part is the synchronization itself. Because the input device can only transmit and the display can only receive, the two trusted endpoints can never communicate directly — and the only thing between them is the computer that is assumed hostile. Conventional key exchange assumes the parties can exchange messages in both directions; here that is impossible by design.

The Synchronized ACK protocol resolves this by having the cloud gateway prove, in a message the untrusted host can relay but cannot forge, that it holds the same session key as the endpoints. The display does not begin showing protected content until that proof arrives. If it does not, the system fails safe — refusing to render and signaling a degraded state — rather than silently operating under a mismatched or substituted key.

## Why the approach matters

Most endpoint security tries to make a compromised computer trustworthy again. This architecture takes the opposite position: it assumes the computer is already lost and ensures that the session's security never rested on the computer to begin with. By moving the trusted I/O path off the host and anchoring trust in dedicated hardware, the host's compromise stops being relevant to the security of the session.

## Further reading

For the full specification — protocol message formats, the step-by-step Synchronized ACK handshake, certificate and trust model, and a worked VDI use case — see [the full paper](/papers/secure-endpoint-system).
