---
slug: /cv
title: Lior Shalev - CV
description: Senior Software Engineer, Hands-on Tech Lead.
---

# Lior Shalev

Personal: [liorshalev.com](https://liorshalev.com)<br>
LinkedIn: [linkedin.com/in/liorshalev](https://linkedin.com/in/liorshalev)

## About me

Software engineer with 20+ years building systems: endpoint security, secure browsers, counter-drone defense, and real-time computer vision. Effective from the kernel up, from Linux drivers and embedded Linux to Chromium internals and applied cryptography, with shipped products across Windows, macOS, Linux, iOS, and Android. I write the code and can own the architecture. I am looking for a senior individual-contributor or hands-on technical-lead role.

## Skills

- **Security:** Endpoint security, Chromium internals, DLP, RF and Wi-Fi cyber systems, applied cryptography.
- **Systems & low-level:** Linux kernel and BSP work, Xilinx and FPGA platforms, embedded Linux, performance-critical systems.
- **Computer vision:** OpenCV, OpenGL, TensorFlow, ARKit, WebRTC, real-time video pipelines.
- **Platforms:** Windows, macOS, Linux, browsers, iOS, Android.
- **Languages:** C++20, Rust, Go, Python, TypeScript.

## Experience

### Jan 2026 – Present: Freelance Software Engineer

Production reliability, low-level systems, and cross-platform performance.

- Refactored Windows and macOS EDR integrations for performance and stability, resulting in a near-zero rate of production failures.
- Developed kernel DMA drivers for FPGA-to-user-space data paths on Xilinx SoC platforms.
- Developed a camera-based spatial depth measurement feature for iOS.

### Jan 2025 – Dec 2025: Stealth startup (founding team)

**Founding Software Developer**. Conceived and led a hardware-enforced endpoint security system from concept to working prototype. The architecture isolates display and input in dedicated trusted hardware, so a compromised host or browser can relay only opaque ciphertext and never access plaintext or keys, defeating keylogging, screen scraping, and man-in-the-browser attacks by design rather than by policy.

- Implemented the trusted display node prototype that captures an untrusted host's HDMI output, decrypts locally, and composites the plaintext as a trusted overlay, so the host never holds the key or plaintext.
- Implemented the content encryption gateway.
- Authored a whitepaper on a three-party authenticated key-exchange protocol. The protocol enables physically isolated, unidirectional input and output devices to converge on a single session key, addressing the state-synchronization problem that arises when the two devices cannot communicate directly.

We decided to close the venture after concluding that the commercial opportunity was too narrow.

_Rust, TypeScript, Node.js, React, V4L2, OpenCV, OpenGL, AES, PKI._

### Jan 2023 – Apr 2024: Talon (acquired by Palo Alto Networks)

**Senior Software Developer** — Talon Enterprise Browser, a Chromium-based secure browser.

- Implemented enterprise DLP policies in a Chromium-based browser, enforcing runtime security controls.
- Researched and developed a Chromium security hardening feature.
- Investigated and resolved Chromium performance issues.

_C++20, TypeScript, Python, Chromium internals._

### Dec 2019 – Dec 2022: D-Fend Solutions (acquired by Motorola Solutions)

**Senior Software Developer** — Counter-drone RF and Wi-Fi cybersecurity systems, deployed globally by defense and critical-infrastructure customers.

- Technical lead for the Wi-Fi counter-drone cybersecurity system.
- Developed the embedded Linux BSP for Xilinx platforms.
- Technical lead for the RF system testing project, covering architecture, automation, and regression coverage.
- Led engineering-wide initiatives to improve code quality, DevOps practices, and release management.

_Python, C, C++, Linux._

### Jan 2018 – Dec 2019: TechSee

**Senior Software Developer** — Augmented reality customer support platform combining AI computer vision with WebRTC.

- Developed browser-based AR image processing and AI inference integrated with WebRTC.
- Developed AR Android and iOS apps with real-time object-tracking AI on live video.

_C++, Swift, Java, Python, TypeScript, React, iOS, Android._

### Earlier

- **2013–2015 — HealthWatch, Software Development Lead.** 15-lead ECG remote monitoring and medical diagnostic product. Led hardware/firmware integration, mobile apps, and cloud backend. _C, C++, iOS, Android, AWS._
- **2008–2012 — Independent Consultant (US), E-commerce and Online Trading.** Built large-scale trading and e-commerce services handling high concurrent request volumes. _C#, .NET, AWS._
- **2004–2008 — Celtro, Cellular Backhaul Systems.** Infrastructure software, IP networking for cellular data transport, real-time DB mirroring. _Linux kernel, C, C++._
- **2002–2004 — Terayon, VoIP Modem / CMTS.** IP security and routing protocols (RSA, SSL, Kerberos). _Linux kernel, C, C++._
- **2000–2002 — Vigilant Technology, Video Surveillance.** MPEG4 storage on RAID with real-time face-recognition pipeline. _C, C++, Win32._
