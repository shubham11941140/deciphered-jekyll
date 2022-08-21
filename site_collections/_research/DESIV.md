---
title: DESIV- Differential Fault Analysis of SIV-Rijndael256 with a Single Fault
image: /assets/images/sivD.png

abstract: |
  Here we mounted a *Differential Fault Attack (DFA)* on NIST LWC Round-1 candidate [**SIV-Rijndael256 AEAD**](https://csrc.nist.gov/CSRC/media/Projects/Lightweight-Cryptography/documents/round-1/spec-doc/SIV-Rijndael256-Spec.pdf) and thus we completely recovered the master-key inducing only one fault in the internal state of the SIV-Rijndael256 AEAD. Moreover, we have used key-scheduling algorithm of *Rijndael256* to make our DFA more stronger.

layout: research_layout
---

> - Joint Work : Aikata, Banashri Karmakar, Dhiman Saha
> - Accepted in **HOST 2020**

Here we mounted a _Differential Fault Attack (DFA)_ on NIST LWC Round-1 candidate [**SIV-Rijndael256 AEAD**](https://csrc.nist.gov/CSRC/media/Projects/Lightweight-Cryptography/documents/round-1/spec-doc/SIV-Rijndael256-Spec.pdf) and thus we completely recovered the master-key inducing only one fault in the internal state of the SIV-Rijndael256 AEAD. Moreover, we have used key-scheduling algorithm of _Rijndael256_ to make our DFA more stronger.

### Contributions

- 3-round fault diffusion property of Rijndael256.
- Exploitation of _Release of Unverified Plaintexts (RUP)_ and _Nonce Misuse Resistance (NMR)_ property of SIV-Rijndael256 AEAD.
- Emphasis on the fact that the Rijndael256 like large state size is actually prone to the fault attack.
- Recovery of master-key of SIV-Rijndael256 AEAD using DFA with only one fault in the internal state.
- Use of key-scheduling algorithm of Rijndael256 in conjunction with the classical DFA for the key-recovery attack presented here.

### Brief Description of SIV-Rijndael256 AEAD

- _Block size (n)_ : 256 bits
- _Key size (k)_ : 128 bits
- _Tag size (\|T\|)_ : 256 bits
- _Nonce length (\|N\|)_ : 128 bits
- _Associated data length (\|A\|)_ : any bit length $$\geq 0$$
- _Message length (\|M\|)_ : any bit length $$\geq 0$$
- _Underlying block cipher (E)_ : Rijndael256 (parent of AES)

#### General Structure of SIV.Enc (Encryption Algorithm of SIV-Rijndael256 AEAD)

<p align="center">
<img src="/assets/images/sivE.png" alt="sivE" width=500px>
</p>

#### General Structure of SIV.Dec (Decryption Algorithm of SIV-Rijndael256 AEAD)

<p align="center">
<img src="/assets/images/sivD.png" alt="sivD" width=500px>
</p>

#### Brief Description of Rijndael256

- _State size_ : 256 bits
- _Master-key size_ : 128 bits
- _Round-key size_ : 256 bits
- _No. of rounds_ : 14
- _Key-scheduling algorithm_ : Same like AES

Each round of modified Rijndael256 executes following steps (almost like AES):

1. _AddTweak (AT)_ : In this step a 3-bit _tweak_ is XORed with each byte of the second column of the state.
1. _SubBytes (SB)_ : Same like the SubBytes operation of AES.
1. _ShiftRows (SR)_ : The shift offsets for rows 0, 1, 2, 3 are determined by the shift-offset vector $$\sigma$$ = {0, 1, 3, 4}
1. _MixColumns (MC)_ : Same like the MixColumns operation of AES.
1. _AddRoundKey (ARK)_ : In this linear step, each byte of the state is exclusive-ORed with the corresponding byte of the round key.

Round structure of modified Rijndael256 is as follows:

<p align="center">
<img src="/assets/images/roundStructure.png" alt="roundStructure" width=650px>
</p>

### 3-round Fault Diffusion Property of Rijndael256

_Diagonal_: A diagonal is the set of four bytes of the state which maps to the same column under SR operation.

> $$j^\text{th} (0 \le j \le 7) diagonal = D_j$$

3-round fault diffusion with a single-byte fault in the diagonal $$D_7$$:

<p align="center">
<img src="/assets/images/RoundPropagation.png" alt="RoundPropagation" width=650px>
</p>
