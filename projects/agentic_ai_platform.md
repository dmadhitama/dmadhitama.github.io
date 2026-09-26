---
layout: project
type: project
image: /img/accenture/accenture-logo.svg
title: "Agentic AI Framework on Indonesian Cloud"
date: 2025
published: true
labels:
  - Artificial Intelligence
  - Agentic AI
  - Large Language Model
  - Tool Calling
  - MCP
  - RAG
  - Python
  - LangGraph
  - FastAPI
  - Cloud Computing
summary: "Delivered an end-to-end Agentic AI solution on an Indonesian sovereign cloud platform and implemented business use cases on top of the agentic framework."
---
<img class="img-fluid" src="/img/accenture/agentic-platform.svg">

## Objective

Deliver an end-to-end agentic AI capability that runs entirely on an Indonesian cloud platform, so that regulated clients can adopt LLM-powered automation while keeping data in-country.

## Approach

- Built the framework layer: an orchestrator agent routes requests to specialised use-case agents, each equipped with tools (enterprise APIs, search, databases) exposed via tool calling and MCP.
- Implemented concrete use cases on top of the framework, from knowledge-grounded Q&A (RAG) to multi-step task automation.
- Models are served from the Indonesian cloud; the framework is model-agnostic so hosted LLMs can be swapped without changing agent logic.
- Added evaluation harnesses and tracing (LangSmith-style) to measure task success, latency, and tool-call accuracy.
