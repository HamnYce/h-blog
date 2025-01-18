---
tags:
  - reflection
  - growth
  - github
  - repo
  - scripting
title: scripts Repo Reflection
pubDate: 1/17/2025
layout: ../../../../layouts/MarkdownLayout.astro
---

## run-command-on-file-change

the scripts were quite small but the github repo organization and readme files were what took a bit of time

I began by trying to restructure my original flutter hot reloader code
which originally, it was meant to hot reload flutter just like with react native.

for those who don't know: With flutter whenever you want to reflect your changes in the sim, you have to go into the terminal that you 'flutter ran' and then press \[shift+\]r whenever you made any changes, which, as someone who likes really quick feedback became annoying at some point.

To solve, I made a ruby script which creates a subprocess with the given command (in this case flutter run) and pipes the input and output. Then, whenever a file changed in the current directory (or sub directories) it would send the refresh signal.

I began to rework the code to try to simulate flutter run with an infinite while loop (do not want to reinstall flutter), that itself caused issues so I ended up pivoting the script into what is is today:

run an initial command, then listen for file changes and run a second defined command for the duration of its life.

on pivoting I decided to begin using chatGPT, before that I had this sense of pride about the script. which has been flip-flopping.
On one end, my pride as a programmer lays in the work and programs I create on the other however, it feels unnecessary, if I can get work out,
that I know how to create then why not pump it out. But I am still on the fence. It still feels a bit like cheating.

## Satisfaction

There was a very nice feeling of satisfaction upon completing all the repos and adding readmes and licensing.
Feels very 'professional' or complete. I'm driven to say I feel like a 'real' programmer.
It's a weird feeling but I don't particularly mind it at the moment, but I feel like it might become an issue in the future, who knows :).
For the time being I have 1 repo complete out of 20 give or take!
