#!/bin/bash
cd /home/kavia/workspace/code-generation/geoquest-flag--landmark-challenge-95187-95197/main_container_for_geoquest_flag_landmark_challenge
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

