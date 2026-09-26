---
layout: project
type: project
image: /img/prosa/prosa-logo.png
title: "Speaker Separation for Overlapped Speech"
date: 2022
published: true
labels:
  - Artificial Intelligence
  - Deep Learning
  - Speech Processing
  - Digital Signal Processing
  - Automatic Speech Recognition
  - Python
  - PyTorch
summary: "Researched speaker separation to untangle overlapped speech in single-channel audio so downstream ASR can transcribe each speaker."
---
<img class="img-fluid" src="/img/prosa/speaker-sep.svg">

## Objective

Single-channel recordings from call centres and meetings often contain two people talking at once, which breaks ASR. The goal was to separate the mixture into per-speaker streams before transcription.

## Approach

- Evaluated deep-clustering and mask-estimation approaches on STFT spectrograms of Bahasa Indonesia mixtures.
- Per-speaker masks are applied and inverted (iSTFT) to obtain clean streams, which are then fed to the ASR engine.
- Measured improvement with SDR/SI-SNR on the separated audio and WER on the resulting transcripts.
