---
layout: project
type: project
image: /img/bithealth/bithealth-logo.jpg
title: "Invoice Information Extraction with OCR + LLM"
date: 2024
published: true
labels:
  - Artificial Intelligence
  - OCR
  - Large Language Model
  - Document Understanding
  - Computer Vision
  - Python
summary: "Built end-to-end invoice document information extraction combining OCR with LLM-based structuring and validation."
---
<img class="img-fluid" src="/img/bithealth/invoice.svg">

## Objective

Turn invoices arriving as scans, PDFs, and phone photos into validated structured records for the hospital group's back office.

## Approach

- Image preprocessing (deskew, crop, contrast) followed by OCR to recover text and layout.
- An LLM converts the noisy OCR output into a strict JSON schema (vendor, line items, totals, tax, dates).
- Rule-based validation checks arithmetic consistency and date formats before the record is stored.
