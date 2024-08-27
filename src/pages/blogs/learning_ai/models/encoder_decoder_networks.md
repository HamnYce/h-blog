---
tags:
  - encoder
  - decoder
  - encoder_decoder
  - pretraining
  - memory
title: Encoder Decoder Networks
pubDate: 8/27/2024
layout: ../../../../layouts/MarkdownLayout.astro
---

## [Pictionary Example](https://towardsdatascience.com/what-is-an-encoder-decoder-model-86b3d57c5e1a)

> The rules of the game are very simple, player 1 randomly picks a word from a list and needs to sketch the meaning in a drawing. The role of the second player in the team is to analyse the drawing and identify the word which it describes.

> In this example we have three important elements player 1(the person that converts the word into a drawing), the drawing (rabbit) and the person that guesses the word the drawing represents (player 2).

![rnn_example_with_rabbit.png](https://vitalflux.com/wp-content/uploads/2023/03/encoder-decoder-architecture.png)

> If we translate the above graph into machine learning concepts, we would see the below one. In the following sections we will go through each component.

![encoder_decoder_exposed.png](https://miro.medium.com/v2/resize:fit:1400/1*paBPTcKP0U4anF6IP9qb9Q.png)
*This figure also reveals that encoders and decoders are just [RNNs (Recurrent Neural Networks)](rnns_(recurrent_neural_networks).md)*


![Encoder Decoder Reference Picture](https://media.licdn.com/dms/image/C5612AQFCmlFpnydcYg/article-cover_image-shrink_720_1280/0/1589551792750?e=2147483647&v=beta&t=3H8e8zWezlq5AMlZ2TVQKUZTd_CpNRo19CyTWgq94C4)
### Encoder (Picturist)

**Encoding means to convert data into a required format**

For example, we convert a sequence of words in Spanish into a two-dimensional vector, this vector is also known as a **Hidden State**.

The encoder is built by stacking [recurrent neural networks (RNN)](https://medium.com/swlh/introduction-to-recurrent-neural-networks-rnn-c2374305a630).

We use this type of layer because it's structure allows the model to understand **context and temporal dependencies of the sequences**

The "hidden state" is the state of *the last RNN timestep*.

### Hidden State (Sketch)
The output of the encoder, a two-dimensional vector that encapsulates (theoretically?) the whole meaning of the input sentence. 
The length of the vector depends on the number of cells in the RNN.

### Decoder

The final step is to decode, which means to convert the coded message into intelligible language. 

The role of the decoder will be to convert the two-dimensional vector into the output sequence. Which in this case is the English sentence. 

This part is also built with RNN layers and a *dense layer* to _predict_ the English word.

### Conclusions

One of the major advantages to this model is that the length of the input and output sequences may differ. This opens the door for interesting applications like video captioning or question and answer.

The major limit of this simple encoder decoder model is that all the information needs to be summarised into a one dimensional vector. For long input sequences that can be extremely difficulty to achieve.

encoder decoder models are key for the latest advances in NLP because they are the seed for
*attention models* and **Transformers**

