#!/bin/bash
rm -rf public lib client bootstrap_component db server
cp -r -f /home/project/japandrama/. /home/jpdrama
meteor

