---
layout: project
type: project
image: /img/musashi/musashi-logo.png
title: "Auto-Parts Counter System"
date: 2019
published: true
labels:
  - Artificial Intelligence
  - Machine Learning
  - Deep Learning
  - Object Detection
  - Object Tracking
  - Computer Vision
  - Python
  - Keras
  - Tensorflow
  - OpenCV
  - Scikit-Learn
  - Matplotlib
  - Scipy
summary: "Developed advanced auto-parts counter using object detection and tracking, aiming to replace weight-scaling method, showing promising results."
---

<img class="img-fluid" src="/img/musashi/part-count.png">

## Objective
We designed a cutting-edge auto-parts counter system, integrating object detection, computer vision for object identification, and tracking capabilities. This initiative aimed to supplant the conventional weight-scaling method previously employed for auto-parts counting. The former method's susceptibility to errors due to slight variations in the weight of each produced auto-part necessitated a more precise solution, which our AI-based auto-parts counter system provides. Herein, I outline the progress made in this project up to February 2020.
1. Due to the visual similarities among the auto-parts, we found it feasible to collect images of the parts from various angles. Camera placement was not extensively considered as the machine environment producing the auto-parts was highly specific, reducing the likelihood of flexible camera placement options.
2. Upon gathering a selection of these images, we proceeded to annotate the dataset and then train the object-detection model. Given the singular object type and its relatively low complexity, a compact and straightforward model sufficed for our purposes.
3. Following the model training phase, we integrated additional algorithms for object tracking. These included rule-based and computer vision-based approaches. The object tracker algorithm not only tracked detected objects but also counted them as long as they remained within the camera's field of view.

This project remained at the prototype and proof-of-concept stage throughout my tenure until I departed from the company in February 2020. Despite not being fully implemented at that time, the outcomes attained were highly promising.