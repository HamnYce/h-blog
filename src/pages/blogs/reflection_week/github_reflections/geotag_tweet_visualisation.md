---
tags:
  - reflection
  - growth
  - github
  - repo
  - data science
  - data visualization
  - tweet visualization
title: Geotagged Tweet Visualization Rework
pubDate: 1/18/2025
layout: ../../../../layouts/MarkdownLayout.astro
---

## Done

That was very grating as it came towards the end.

Try to recomplete an old project with unreadable code is very hard

always make your code readable, you never know when you'll need to read it.

## API Usage

i ended up using geopy to decode the location data. midway through the forloop i realised that its gonna take a while.

so i ended up multithreading the calls and got it done in about an hour give or take in comparison to the > 7 hours i initially tried

there were about 26000 locations, however i ended up making over 60000 requests because of the retry, pain.

## Growth

I have realized hunting for the right data is quite important!

## Rework

I have decided to overhaul the current twitter validation due to the lack of the original dataset and the state of the repo at the moment.

~~It will also be rewritten in golang for performance and learning~~ it will still use plotly and python to keep the original work 'intact'. Furthermore, golang does not have a defined ecosystem for data manipulation and visualisation.

the first step i have decided to take is to figure out what the functions i wrote inside sql_library.py are returning

from there my idea is to try to map out how the data is flowing through the application

the page i will try to tackle first (that i feel would be an easier entry) is the historical_page.py

after attempting to o through the sql_library.py file the code is quite long and feels very over engineered.

i will pivot a bit towards rewriting the program from scratch, and try to preserve as much of the original 'end product' as possible.

## historical page

the first step will be to weed out any sql_library references and have the page not depend on it anymore

after cutting the necessary pieces out ive acquired some pictures of what the page should look like / include.

- and just as i was writing this i found pictures of what the end product should look like :')
