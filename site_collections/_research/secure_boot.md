---
title: Secure Boot For Linux Based Embedded Devices
image: /assets/images/secureboot.jpg

abstract: |
  This document provides a summary of research performed so far on developing secure boot solutions for Linux-based embedded devices. We are primarily focussed on using a hardware Trusted Platform Module *(TPM)* chip as a Root of Trust *(RoT)* for performing various cryptographic computations.

layout: research_layout
---

This document provides a summary of research performed so far on developing secure boot solutions for Linux-based embedded devices. We are primarily focussed on using a hardware Trusted Platform Module (TPM) chip as a Root of Trust (RoT) for performing various cryptographic computations.
There are a plethora of embedded Linux boards available in the market. We have chosen to work on three most commonly used boards in the domain of Internet of Things (IoT) prototyping and implementation. They are:

- Raspberry Pi 3 Model B
- Arduino UNO
- Nordic NRF52 series boards

All of the above have different boot processes but the underlying mechanism for implementing secure boot remains similar across the three of them. To get a picture of the general steps involved in implementing a secure boot mechanism, the following figure$$^{1}$$ provides the necessary abstraction.

![Secure Boot Flow Chart](https://paper-attachments.dropbox.com/s_15244AE2AA0B4D176F6A627859EC55088537571F7D39D1335297742D7B15816F_1579450000949_Screenshot+from+2020-01-16+00-23-20.png)

The above diagram calls for TPM initialization after the execution of the 1st Stage Bootloader which is typically baked in the ROM of the respective boards. Hence, it is the OEM which has control over the 1st stage bootloader. After the 1st stage bootloader, the TPM should be initialized before proceeding further. Initialization of te TPM involves loading the pre-programmed cryptographic functions into the TPM’s memory. The TPM consists of various cryptographic keys necessary for verification of components which are to be loaded in the due boot process. Usually the TPMs have an NV-RAM where one can permanently store the certificates and private keys for verifying boot components. The TPM should provide for the following functionalities:

- Hashing
- Signing and Signature Verification

The TPM will hence, hash the boot components (i.e. the 2nd stage bootloader and other firmwares) and then proceed for signature verification. The NV-RAM of the TPM has the manufacturer’s private key(s) which is used for verification purposes. If the use case is supplying secure updates to the device, the cryptographic keys stored in the TPM also have to be updated.

![The OPTIGA Trust X Memory Slots](https://paper-attachments.dropbox.com/s_15244AE2AA0B4D176F6A627859EC55088537571F7D39D1335297742D7B15816F_1579509867569_Screenshot+from+2020-01-20+14-13-47.png)

If the verification fails, we have two options:

- Abort the boot process
- Fall back to a recovery bootloader

In case of a successful verification, the TPM then passes on the control to the 2nd stage bootloader. This stage will load all the verified firmware and pass on the control to the 3rd stage bootloader, which loads the kernel image. Now the kernel has to be verified too, hence, for secure boot we plan to use U-Boot - a widely used open source bootloader supporting cryptographic primitives to verify the kernel image. It can be observed that the TPM does not need to perform kernel verification, instead it had verified all components prior to U-Boot, thereby forming a Chain of Trust with the TPM itself as the root.
The TPM that we are currently using is the OPTIGA Trust X Shield2Go.

## Progress Till Date

Since, after the TPM, the burden of verification passes on to U-Boot, we decided to familiarize ourselves with the U-Boot APIs. This was done by implementing a software-based verified boot$$^{4}$$ on the Raspberry Pi 3 Model B Board. The Operating system chosen was OP-TEE (Open Source Trusted Execution Environent) instead of the standard Raspbian OS. This is because, U-Boot provides open source interfaces for integration with the OP-TEE OS and the same were not available for the Raspbian OS. The steps involved were the following:

1. Build the OP-TEE operating system on a native Linux (Ubuntu 18.04) machine
2. Build the OP-TEE specific U-Boot dependencies on the same machine
3. Link the U-Boot dependencies with OP-TEE and proceed with building a custom bootloader and other supporting binaries
4. Generate Cryptographic keys followed by hashing and signing of the kernel image and various firmware binaries
5. Copy the boot files on a Micro SD card and mount it in the Raspberry Pi 3
6. Boot up the device by observing the verification process on an UART terminal
7. Modify the kernel image and boot up the device again to find failure verification failure - i.e. successful execution of secure boot

The above experiment demonstrates software-based secure boot. This approach, however, has a fatal flaw. The entire framework sits on a Micro SD card which can be easily wiped out. Hence, it is imperative for an effective secure boot solution to have a dedicated hardware co-processor that would take care of the cryptographic computions and secrets.
In light of the above information, we will now discuss secure boot in context of various embedded boards.

## Arduino UNO

The OPTIGA Trust X software stack provides support for Arduino in form of dedicated cryptographic libraries$$^{2}$$. Hence, we have familiarized ourselves with various cryptographic primitives provided by the libraries. These include:

1. Certificate generation
2. Hashing
3. Signing and Signature verification

The next step would be to write a custom bootloader which would first activate the TPM and then proceed to complete the boot process. However, implementing a hardware based secure boot solution for Arduino does come with a caveat. An adversary can always flash/wipe the Arduino’s memory by simply connecting it to a high-voltage source and get rid of our bootloader. But as a proof of concept, we wish to pursue the lines of developing a custom bootloader integrated with the OPTIGA Trust X Shield2Go Module.

## Raspberry Pi 3 Model B

The Raspberry Pi foundation, as of this date, does not provide any support for enabling secure boot mechanisms. A number of 3rd part solutions have successfully demonstrated software-based secure boot, but a TMP based implementation is yet to be released. The primary challenge in integrating a TPM with the Raspberry Pi board is development of custom bootloader binaries supporting U-Boot in the stages after TPM verification. The lack of supporting documentation for developing custom bootloaders, unlike Arduino, demands an independent research. Hence, the current line of research for Raspberry Pi is focussed on the following:

1. Finding a method to initialize the OPTIGA TPM after the 1st stage bootloader completes its execution. The boot process of Raspberry Pi starts off with initialization of the GPU which then triggers the CPU initialization through the ARM code execution (2nd stage bootloader).
   ![Raspberry Pi Boot Process](https://paper-attachments.dropbox.com/s_15244AE2AA0B4D176F6A627859EC55088537571F7D39D1335297742D7B15816F_1579458486522_Screenshot+from+2020-01-16+16-08-46.png)

2. Exploring how U-Boot can be interfaced with the standard Raspbian OS, allowing us to verify its kernel image and various other firmwares
   ![U-Boot kernel verification](https://paper-attachments.dropbox.com/s_15244AE2AA0B4D176F6A627859EC55088537571F7D39D1335297742D7B15816F_1579458678086_Screenshot+from+2020-01-20+00-01-01.png)

## Nordic NRF52

The Nordic Board makes an interesring study primarily because the Nordic foundation has implemented a software framework supporting TPM based secure boot mechanism. Currently, we have not been able to pursue this proof of concept due to unavailability of the Nordic NRF52 Board. Once the board has been procured, the presence of well documented open source materials$$^{3}$$ will help us implement a proof of concept with the Nordic Boards using OPTIGA Trust-X as an RoT.

## Conclusion

On receiving the necessary equipment, the first step will be taken in direction of implementing secure boot for the Nordic Board. We also look forward to opening up discusison threads in the Raspberry Pi community regarding the developement of custom bootloaders for supporting secure boot.

## References:

- [Performance of Secure Boot in Embedded Systems - Christos Profentzas ; Mirac Günes ; Yiannis Nikolakopoulos ; Olaf Landsiedel ; Magnus Almgren (Source of the Figures)](https://ieeexplore.ieee.org/author/37086939784)
- [Arduino Optiga Crypto Libraries](https://github.com/Infineon/arduino-optiga-trust-x)
- [Nordic OPTIGA Trust X Secure Boot](https://infocenter.nordicsemi.com/index.jsp?topic=%2Fcom.nordic.infocenter.sdk5.v15.3.0%2Flib_ifx_optiga.html)
- [Raspberry Pi Software Based Secure Boot](https://blog.nviso.eu/2019/04/01/enabling-verified-boot-on-raspberry-pi-3/)
