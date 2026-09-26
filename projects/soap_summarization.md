---
layout: project
type: project
image: /img/bithealth/bithealth-logo.jpg
title: "Doctor–Patient Conversation to SOAP Note"
date: 2024
published: true
labels:
  - Artificial Intelligence
  - Large Language Model
  - Natural Language Processing
  - Speech-to-Text
  - Healthcare
  - Prompt Engineering
  - Python
  - Langchain
summary: "End-to-end framework that summarizes doctor–patient conversations and doctor monologues into structured SOAP (Subjective, Objective, Assessment, Plan) notes."
---
<img class="img-fluid" src="/img/bithealth/soap.svg">

## Objective

Cut clinical documentation time by automatically producing a SOAP note from the audio of a consultation or a doctor's dictated monologue.

## Approach

- Speech-to-text with speaker diarization separates doctor and patient turns.
- A prompt-engineered LLM stage extracts and organizes the transcript into the four SOAP sections, keeping medical terminology and negations intact.
- Designed evaluation methods (clinician review plus automatic metrics) to estimate framework performance and detect hallucinated findings.
