---
layout: post
title:  "Update from Controls"
date:   2017-12-04
author: "Umer Salman"
---

Controls has made good progress towards our goals for this year. We first started with our smaller tasks to improve the quadcopter’s abilities before jumping onto new ones. We made some scripts to improve our data collection methods. We also finally got the optical flow camera working correctly and well, which was something we were completely unable to get functioning last semester. Now we are able to hold our position while hovering and land on specific points. We are also working on using that data in our own flight modes in order to hover above specific waypoints on the grid. 

Another aspect we worked a lot on was radar. This was possible because Hardware subteam build us a testbed quadcopter frame, since it’s much easier and more fixable to be testing new features on the testbed than the actual. We ordered a μSharp Patch Radar as we were hoping to be able to use the Patch for obstacle avoidance. After implementing (which Aerotenna support was very helpful with), we tested out the radar and found that the Patch works well for detecting many objects, but unfortunately not well for our use case - detecting PVC poles. We’re hoping to move to a 360° Lidar on this front, which should be easier to figure out now that we’ve learned how the Pixhawk uses proximity sensors. 

Lastly, we’ve also been working with Computations and Simulations subteam on getting a quadcopter running ArduCopter simulated on Gazebo. On the simulation, we need all of our sensors, including Optical Flow and Lidar, functioning similarly to the real quadcopter. 

As always, we keep our code publicly available on our GitHub, located here: [https://github.com/Texas-Aerial-Robotics](https://github.com/Texas-Aerial-Robotics)
