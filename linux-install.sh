#!/bin/bash -eux


if ! command -v curl &> /dev/null
then
  echo "curl could not be found, will install"
  apt install curl
fi

if ! command -v node &> /dev/null
then
  echo "node could not be found, will install"
  curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
else

NODE_VERSION=$(node --version)
EXPECTED_NODE_VERSION="v16.9.1"
  if [ "$NODE_VERSION" = "$EXPECTED_NODE_VERSION" ]; then
    echo "Node version is OK"
  else
    echo "Node version is different than $EXPECTED_NODE_VERSION. Install the correct version"
    exit 1
  fi

fi



