#!/bin/bash
while true
do
  printf "Running self-referential code animation - endless mode\n\n"
  node file-printer.js 'bootstrap.sh'
  node file-printer.js 'file-printer.js'
  printf "\nReloading bash script in 10 seconds..."
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
