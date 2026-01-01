---
layout: project
type: project
image: /img/musashi/musashi-logo.png
title: "AI-based Automatic Visual Inspection Machine"
date: 2019
published: true
labels:
  - Artificial Intelligence
  - Machine Learning
  - Deep Learning
  - Object Detection
  - Computer Vision
  - Python
  - Keras
  - Tensorflow
  - OpenCV
  - Scikit-Learn
  - Matplotlib
  - Scipy
summary: "A responsive web application for travel planning that my team developed in ICS 415."
---

<img class="img-fluid" src="/img/musashi/ai-vis-inspect.png">

## Objective
The primary objective of the project is to develop an AI-powered automated visual inspection system tailored for inspecting camshafts, potentially supplementing or substituting human inspectors. Our initial challenge lay in initiating and advancing this novel endeavor. Below, I delineate the progression of our project's development:

1. Conduct a comprehensive examination of the camshaft to analyze prevalent defects. This includes interviewing human inspectors to understand their inspection methods and the characteristics of detected defects.
2. Develop the infrastructure necessary for data collection, encompassing considerations such as background setup, camera specifications, lens requirements, object-to-lens distance, lighting arrangements, and more. Additionally, simulate the process of capturing camshaft images within this designated environment.
3. Acquire defective camshafts and artificially induce defects to facilitate testing. These defects will be intentionally created rather than naturally occurring on the camshaft.
4. Investigate available AI models suitable for integration into the project. Various AI-based image processing techniques, such as image segmentation, classification, and object detection, were explored extensively. After thorough research, experimentation, and testing, the decision was made to employ an object detection algorithm for this endeavor.
5. Perform manual annotation of the collected images and apply image augmentation techniques to enrich the dataset. Subsequently, utilize this augmented dataset to train various pre-existing AI models.
6. Conduct further experiments to refine the models, ultimately selecting the most optimal outcome based on performance metrics.
7. Concurrently, as my partner develops the backend and frontend systems, I integrate the best-performing model into the system. This model is then deployed onto hardware, some kind of mini-PC namely Jetson, and tested on the pre-established machine with the standardized environment we previously defined.

## Outcome
Since February 2019, when the project commenced, significant progress has been achieved. We successfully developed a system that has been deployed within the automated visual inspection machine. Testing conducted with real, non-artificially defected camshafts has yielded an accuracy rate ranging between 80-90 percent. Furthermore, our system demonstrated the capability to identify up to 5 out of the 6 proposed distinct defect types, marking a notable advancement in our project's objectives.
