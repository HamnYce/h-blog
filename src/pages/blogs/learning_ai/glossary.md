---
tags:
  - keywords
  - definitions
title: Glossary
pubDate: 8/27/2024
layout: ../../../layouts/MarkdownLayout.astro
---

- Perplexity:  it quantifies how well a language model predicts a given sequence of words or tokens. In simpler terms it measures how surprised or uncertain a language model is when encountering new data. (there is a formula :1).
- Dense Layer (Fully Connected Layer): layer where each neuron is connected every other other neuron in the subsequent layer
- Licensing Relationship
- Transfer Learning: method where pre-trained model is reused as a starting point for anew model. popular in deep learning because initial training requires little data, can improve generalization about a task by using previously gained knowledge.
- [t-distributed stochastic neighbour embedding](https://towardsdatascience.com/t-sne-clearly-explained-d84c537f53a)(t-SNE): non-linear dimensionality reduction.
- [attention heads](general_attention.md)
- input token \[CLS]
- [self attention mechanism](self_attention.md)
- span representations: refer to the representations of contiguous segments or spans of text. typically consisting of a sequence of consecutive tokens in a given sentence or document.
- probing tasks
- examples of linguistic properties
- auxiliary classification task
- [Softmax](softmax.md): turns vector into probabilities (extension of logistic regression). The softmax function is a function that turns a vector of K real values into a vector of K real values that sum to 1. The input values can be positive, negative, zero.
- ![softmax.jpg](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbZAnN-wESpYW3EDgNCBNdDjVRUnsxjBLUWw&s)
- **Vector-Sequence Model:** fixed-sized vectors as input -> output vectors of any length, image -> image caption
- **Sequence-Vector Model**: vector of any size -> output a vector of fixed size, Sentiment analysis.
- **Sequence-to-Sequence Model** most popular. Input as a sequence -> output sequence with variant sizes. Language translation, time series data for stock market prediction.