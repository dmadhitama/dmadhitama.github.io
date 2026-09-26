---
layout: project
type: project
image: /img/accenture/accenture-logo.svg
title: "End-to-End Voice AI in Bahasa Indonesia"
date: 2025
published: true
labels:
  - Artificial Intelligence
  - Speech-to-Text
  - Text-to-Speech
  - Large Language Model
  - Agentic AI
  - Automatic Speech Recognition
  - Bahasa Indonesia
  - Python
summary: "Delivered an end-to-end voice AI solution in Bahasa Indonesia chaining STT, an LLM agent, and TTS into a single conversational pipeline."
---
<img class="img-fluid" src="/img/accenture/voice-ai.svg">

## Objective

Let users talk to enterprise systems in natural Bahasa Indonesia and hear a spoken answer back, combining three model families into one low-latency pipeline.

## Approach

- **STT** transcribes Indonesian speech, including code-switching with English terms common in business conversations.
- The transcript is passed to an **LLM agent** that reasons over the request and calls enterprise knowledge sources and APIs through tools.
- The response is synthesised with **TTS** in a natural Indonesian voice.
- Streaming between stages keeps end-to-end latency conversational; evaluation covers WER of the STT stage, answer quality, and TTS naturalness.
