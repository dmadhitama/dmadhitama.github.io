---
layout: project
type: project
image: /img/prosa/prosa-logo.png
title: "Design a noise robust VAD algorithm"
date: 2022
published: true
labels:
  - Artificial Intelligence
  - Machine Learning
  - Deep Learning
  - Automatic Speech Recognition
  - Digital Signal Processing
  - Speech-to-Text
  - Noise Reduction
  - Speech Enhancement
  - Python
  - MATLAB
  - C/C++
  - PyTorch
  - Scipy
  - Scikit-Learn
  - Matplotlib
  - Scipy
summary: "Implemented novel Voice Activity Detection (VAD) algorithm using digital signal processing (DSP) techniques, reducing computational costs without deep learning models."
---

<img class="img-fluid" src="/img/prosa/vad.png">

## Objective
To enhance efficiency and accuracy, a novel approach to Voice Activity Detection (VAD) algorithm design was devised. VAD typically identifies silence segments within speech signal audio. By accurately detecting and localizing these segments, we can effectively segment the entire speech signal. This segmentation is crucial for reducing the computational cost of decoding in the Automatic Speech Recognition (ASR) model.

The entire VAD experiment process relies on digital signal processing algorithms. We deliberately avoided employing deep learning models to circumvent the feature extraction step within the VAD process. By directly applying DSP algorithms, we achieved a notable reduction in computational costs.