#!/bin/bash
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 776733965771.dkr.ecr.us-east-1.amazonaws.com
cd api/form
docker build -t kocoblo/form .
docker tag kocoblo/form:latest 776733965771.dkr.ecr.us-east-1.amazonaws.com/kocoblo/form:latest
docker push 776733965771.dkr.ecr.us-east-1.amazonaws.com/kocoblo/form:latest