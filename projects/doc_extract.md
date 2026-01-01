---
layout: project
type: project
image: /img/musashi/musashi-logo.png
title: "Paper Document Information Extraction"
date: 2019
published: true
labels:
  - Artificial Intelligence
  - Machine Learning
  - Deep Learning
  - Object Detection
  - Computer Vision
  - Tesseract OCR
  - Python
  - Keras
  - Tensorflow
  - OpenCV
  - Scikit-Learn
summary: "Developing automated document information extraction system for handwritten and computer-generated text, employing segmentation, AI models, and OCR techniques."
---

<img class="img-fluid" src="/img/musashi/doc-extract.png">

## Objective
The objective of this project is to develop an automated system capable of extracting information from paper documents. These documents consist of both handwritten and computer-generated text, all of which necessitate extraction. This project can be divided into two methods:

1. Handwritten text extraction. The texts are fortunately situated in highly specific locations. Leveraging this advantage, we manually delineate these areas as regions of interest. Within these defined areas, segmentation is executed to generate overlapped segmented regions, each representing an individual character. Subsequently, a pre-trained AI model is employed to infer the handwritten character images into single characters. Lastly, a rule-based algorithm facilitates the conversion of multiple characters into sentences.
2. Computer-generated text. For this part, we can readily apply an OCR technique for conversion. Although this technique is robust, it requires further scrutiny of the results. Regrettably, we haven't yet conducted additional experiments in this area. However, our approach for post-processing after the system generates the OCR outputs is well-defined.