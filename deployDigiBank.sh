#!/bin/bash

source digibank.sh

peer lifecycle chaincode package cp.tar.gz --lang node --path ./contract --label cp_0

peer lifecycle chaincode install cp.tar.gz