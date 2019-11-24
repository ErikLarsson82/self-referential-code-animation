#!/bin/bash
while true
do
  printf "Running self-referential code animation - endless mode\n\n"
  node foo.js
  printf "Reloading bash script in 10 seconds..."
  sleep 2
  printf "..."
  sleep 2
  printf "..."
  sleep 2
  printf "..."
  sleep 2
  printf "...\n\n\n\n"
  sleep 2
done
