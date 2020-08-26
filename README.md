# Introduction

This is a blog recounting the features and learnings I’ve encountered developing the kpractice app over the course of the summer of 2020 on the side from my fulltime internship.

Kpractice is made with the purpose of being an accessible practice tool for musician that can be accessed from any device. I was inspired to create the app for a professional musician friend who now uses it daily.

# Features

The app has 4 primary practice tools. These are features requested from users.

## Metronome
The metronome is a metronome with a central server that syncs all devices to the same rhythm. This was created for group musicians who have trouble practicing with the same metronome.
I’ve already dedicated a blog towards this feature. You can find it here: https://madebykiet.com/posts/metronome_blog

## Drone
The drone uses the Web Audio API, it creates an oscillator which can be fed a frequency to oscillate towards. I stored the frequency corresponding to each note and fed it to the oscillator when the note is pressed. Pretty straight forward.

## Tuner
The tuner is actually pretty cool. It is essentially the inverse of the drone. It takes in microphone input and isolate the frequency. It then maps the frequency to its corresponding note, printing it back to the user.

## Timer
Anyone who knows how to write JavaScript should be able to write a timer. I won’t go into it. But look at how nice it looks.

## Session
This feature works like a count-up timer but it also adds the session to your google calendar. This feature works relatively well through Google API though it was a pain to develop.

# Frontend

Here we’ll talk about some front-end features based on the architecture and framework. The app is developed in Angular, which is a JavaScript framework. This is a powerful framework with some built in tool that I’ll showcase in this section.
Angular logo

## Lazy-loading
Bundles are only loaded when they’re needed, saving startup performance and network usage for users

## Progressive Web App
The app is cached over time, letting it both be saved as a native-appearing app and work offline. This is a great feature as the app doesn’t need network connection and can work anywhere.

Here’s a video showcasing these features: https://youtu.be/FoxG5bBtXV4

# Backend

## Data
The app is plugged into a Firebase NoSQL server for data storage. It also uses Firebase Authentication and Analytics.
Firebase logo
## Server
The actual page server is written in an Express server and handle some of the functionalities such as serving bundles or keeping the metronome synced.

## Analytics
Analytics works pretty well out of the box, I can see current user streams and all the action events. Unfortunately, this doesn’t track users with AdBlockers on.

Analytics dashboard

Here’s a demo video of the backend: https://youtu.be/35sh2h6U07Y

# Next Steps

I’m pretty happy to be able to wrap up this project. It took a little longer than intended as a function of learning Angular for the first time and working full-time.

If afforded more time, I would like to refactor the authentication scheme I used in the front-end, I think it’s unnecessarily long.

I would also like to add a homepage to get the Google API verification. At the moment, the app sets off a warning to user from google because it’s not verified, which is very big nono.

Overall, pretty happy with the result. I’m glad it’s being received very well and used consistently. Looking forward to the next project.
