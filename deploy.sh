#!/bin/bash

cd hf
chmod +x bootstrap.sh
./bootstrap.sh
cd commercial-paper
./network-clean.sh
./network-starter.sh


chmod +x deployMgentacorp.hs
./deployMgentacorp.hs
