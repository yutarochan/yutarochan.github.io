---
title:  "A Web-Based FaceRig + Live2D Implementation"
date:   2016-3-7 0:00:00
description: Web Version of FaceRig + Live2D
---

The following blog post was based on an original post I wrote for
[Qiita](http://qiita.com/yutarochan/items/6f08bfa7b20709a6b3ba) and was translated
from Japanese. Also due to TOS reasons with the Live2D SDK, I cannot post the source
code to this implementation.

***

With the recent hype surrounding [FaceRig](https://facerig.com/) and the release
of their [Live2D](http://www.live2d.com/en/) module, it was certainly interesting
to see two really interesting pieces of technology merge into one neat application
for use in areas like gaming and new human-computer interaction systems.

<iframe width="480" height="270" src="https://www.youtube.com/embed/IINyowbMqJI"
frameborder="0" allowfullscreen></iframe>

With that, I wanted to take this an opportunity to hack together a quick-and-dirty
web-based implementation of FaceRig's Live2D module for a web browser. Of course
further refinements to improve the tracking ability or the fluidity of the animation
in the future.

In the past, I have implemented a demo of Live2D on a browser based on OpenGL.
For this implementation, I have utilized the same Live2D demo codebase and will
simply look through the SDK to be able to adjust the parameters to deform the angular
direction of the character's face.

![Implementation of the Web Version of Live2D](https://qiita-image-store.s3.amazonaws.com/0/64623/4d5fed48-372d-c3b9-0a3f-ddbd5c633e93.png)

For facial tracking, I implemented a [Javascript based facial tracker](https://github.com/auduno/clmtrackr) based on the
[Constrained Local Models](http://dl.acm.org/citation.cfm?id=1938021) from
Saragih et. al's paper. This works fairly well for a prototype (although not really perfect), however can
probably truly optimized with either a better model or a completely new tracking
algorithm (such as implementing a Lucas-Kanade Optical Flow based tracker in Javascript).
But for now, this would suffice to at least get some of the primary functions of facial feature tracking down.

Below you can see the facial feature tracking algorithm in action:

![Facial Feature Tracking Demo 1](https://qiita-image-store.s3.amazonaws.com/0/64623/c37157ae-f985-0b30-3cdc-87a4f05e49ed.png)

![Hey look mom, I'm Iron Man!](https://qiita-image-store.s3.amazonaws.com/0/64623/f93cbf6a-e568-da2d-93cc-526ac90290c0.png)

The original source for the OpenGL based Live2D implemented a mouse based tracker
which would use the mouse pointer's coordinates as a means to rotate and morph the
face to the corresponding angle of where the pointer is. The plan here is to map the
facial feature tracking coordinates to the mouse pointer and attempt to move the
character's face.

For a very naive approach, we can use the nose as a key point to have it track only
the rotation of the head for our initial implementation. Further down the road we
can utilize these parameters to further optimize the tracking of the facial features.

We will use the coordinate point number 62 as our tracking point for the facial tracking.

![Facial Coordinates](https://qiita-image-store.s3.amazonaws.com/0/64623/de76edbf-2b1c-fed4-8581-b7bf53667fe3.png)

Using the above method, I was able to make the head rotate slightly - but not fluidly
enough like the original implementation as the magnitude of movement is very small.
To fix this, we may have to normalize the values so that the movement of our face would
be greater for the corresponding head movements captured from the camera.

For now, this was a quick-and-dirty implementation of FaceRig Live2D module. However,
down the road we can maybe use a better tracking algorithm to track certain features of
the face with greater accuracy (using deep learning models maybe). Furthermore, we can
dig into the Live2D SDK to see how we can morph some of the facial features to get a better
control over the visual aspects of the avatar.

![The Final Product](https://qiita-image-store.s3.amazonaws.com/0/64623/db700e2f-cacf-471a-bd4a-f7231af98e9a.png)
