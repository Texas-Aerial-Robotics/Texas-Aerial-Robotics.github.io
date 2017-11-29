---
layout: post
title:  "Update from Computer Vision"
date:   2017-11-29
author: "Mark Loveland"
---

In the second year of development, the computer vision team is focused on two objectives. The first objective is to track the roombas reliably in real time; the second is to be able to localize the drone with respect to the grid. The team is currently training the open source tinyYOLO neural net to recognize roombas. A few reasons why the group decided to use tinyYOLO is that it is lightweight for a neural net, gpu optimized, runs at high fps, and is good for detecting objects from different angles. For the objective of localization, the computer vision team is currently working on a model that will take corners from multiple side cameras and transform them onto a virtual grid that would allow the calculation of drone position as well as Roomba positions.