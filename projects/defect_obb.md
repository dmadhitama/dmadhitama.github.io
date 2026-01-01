---
layout: project
type: project
image: /img/sju/sju-logo.png
title: "LED Defect Detection (With Oriented Bounding Box)"
date: 2023
published: true
labels:
  - Artificial Intelligence
  - Machine Learning
  - Deep Learning
  - Oriented Object Detection
  - Computer Vision
  - Python
  - PyTorch
  - OpenCV
  - Scikit-Learn
  - Matplotlib
  - Scipy
summary: "Developed AI system to detect LED defects on PCBs, adapting model to generate oriented bounding boxes for tilted LEDs. Established baseline and improved it."
---

<img class="img-fluid" src="/img/sju/oriented-bbox.jpg">

## Objective
This project, initiated by a company, aims to detect defects in LED installations on PCBs. LED defects are determined by the angle of installation; a non-defective LED is installed without tilting, while a tilted LED requires the AI model to generate an oriented bounding box, including its angle.

Due to the private nature of the dataset, no baseline results were available. Consequently, I established a new baseline and subsequently endeavored to enhance it by adapting the baseline model.
The primary challenge lay in modifying the existing model to generate oriented bounding boxes, as the original model only produced normal bounding boxes with two annotation points.