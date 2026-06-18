---
slug: /cv
title: Lior Shalev - CV
description: Lior Shalev - CV.
---

# Lior Shalev

Personal website: [liorshalev.com](https://liorshalev.com)<br>
GitHub page: [github.com/liorshalev01](https://github.com/liorshalev01)<br>
LinkedIn page: [linkedin.com/in/liorshalev](https://linkedin.com/in/liorshalev)

## About me

Software architect and hands-on systems engineer building products where failure is expensive: endpoint security, secure browsers, counter-drone defense, and real-time computer vision. Most recently led a hardware-enforced endpoint-security system from concept to working prototype and provisional patent.

Experience from the kernel up: Linux drivers, embedded Linux, Chromium internals, and cryptographic protocols, with shipped products on Windows, macOS, Linux, iOS, and Android. Equally effective as the architect of a system and as the engineer writing its code.

## Technical strengths

- **Security engineering:** Endpoint security, Chromium/browser internals, DLP, RF/Wi-Fi cyber systems, applied cryptography and PKI, and security architecture for high-assurance products.
- **Systems & low-level engineering:** Linux kernel/BSP, Xilinx/FPGA platforms, driver development, embedded Linux, and performance-critical C, C++20, and Rust.
- **Computer vision, AR, and real-time media:** OpenCV, TensorFlow, ARKit, WebRTC, and real-time object tracking on live video.
- **Cross-platform product delivery:** Production software across Windows, macOS, Linux, iOS, and Android; TypeScript/React, Python, Go, and AWS. Strong test, release, and DevOps ownership.

## Jan 2025 – Dec 2025: Stealth startup (founding team)

### Principal Architect

Conceived and led a hardware-enforced endpoint-security system from concept to working prototype and provisional patent. The architecture isolates display and input in dedicated trusted hardware, so a compromised host relays only opaque ciphertext and never holds plaintext or keys, defeating key-loggers, screen-scraping, and man-in-the-browser attacks by design, not policy.

#### Design & IP

- **Synchronized ACK.** A three-party authenticated key-exchange protocol that lets physically isolated, unidirectional input and output devices converge on a single session key, solving the state-synchronization problem that arises when the two devices cannot communicate directly. Provisional patent.
- **System whitepaper.** Threat model, three-node trust architecture, device provisioning/PKI, and the complete cryptographic protocol.
- **Secure VDI.** A protocol bridge to a standard VDI backend.

#### Endpoint prototype

- Hardware-enforced trusted display node on a Raspberry Pi 5: captures an untrusted host's HDMI output, decrypts locally (AES-256-GCM), and composites the plaintext as a trusted overlay, so the host never holds the key or plaintext.
- Browser relay and cloud gateway: an untrusted React browser endpoint and a proxy handling secure-message crypto and content rendering.

We decided to close the venture because we assessed the commercial opportunity as too narrow to justify continued full-time investment.

**Project GitHub page →** https://github.com/liorshalev01/secure-endpoint

## Jan 2025 – Present: Software engineering consultant

Independent consultant for security, embedded, and AR/computer-vision companies, alongside the venture above through Dec 2025 and full-time since. Focused on production reliability, low-level systems, and cross-platform performance.

- Developed iOS ARKit camera-based spatial depth measurement.
- Developed kernel DMA drivers for FPGA-to-userspace data paths on Xilinx SoC platforms.
- Improved Windows/macOS EDR performance and stability, raised test coverage to 80%, resulting in zero production failures.

## May 2024 – Dec 2024: Career break

Reading the books I'd never had time to read.

## Jan 2023 – Apr 2024: Talon Cyber Security (acquired by Palo Alto Networks, $625M)

### Senior Software Developer

Talon's Enterprise Browser, a Chromium-based secure browser for enterprise.

- Implemented enterprise DLP policies inside a Chromium-based browser, enforcing security controls at browser runtime.
- Researched and shipped Chromium security hardening features.
- Investigated and resolved Chromium performance issues.

## Dec 2019 – Dec 2022: D-Fend Solutions (acquired by Motorola Solutions, $1.5B)

### Senior Software Developer

Counter-drone RF/Wi-Fi cybersecurity systems. Products deployed by defense and critical-infrastructure customers globally.

- Software architect and team lead for the Wi-Fi counter-drone cyber system.
- Developed the Linux Board Support Package for Xilinx platforms.
- Led the RF system testing project — architecture, automation, regression coverage.
- Led code-quality, DevOps, and release-management initiatives across engineering.

## Jan 2018 – Dec 2019: TechSee

### Senior Software Developer

Augmented-reality customer-support platform combining AI computer vision with WebRTC; deployed at telecom and consumer-electronics enterprises.

- Architected and developed the AR web client — browser-based image processing and AI inference integrated with WebRTC.
- Architected and developed the AR Android and iOS apps — real-time object tracking AI on live video.

## 2016–2017: Career break

Reading the books I'd never had time to read.

## Earlier

- **2013–2015: HealthWatch, Software Development Lead.** 15-lead ECG remote monitoring and medical diagnostic product. Led hardware/firmware integration, mobile apps, and cloud backend. _C, C++, iOS, Android, AWS._
- **2008–2012: Independent Consultant (US), E-commerce and Online Trading.** Built large-scale trading and e-commerce services handling thousands of concurrent requests per minute. _C#, .NET, AWS._
- **2004–2008: Celtro, Cellular Backhaul Systems.** Infrastructure software, IP networking for cellular data transport, real-time DB mirroring. _Linux kernel, C, C++._
- **2002–2004: Terayon, VoIP Modem / CMTS.** IP security and routing protocols (RSA, SSL, Kerberos). _Linux kernel, C, C++._
- **2000–2002: Vigilant Technology, Video Surveillance.** MPEG4 storage on RAID with real-time face-recognition pipeline. _C, C++, Win32._
