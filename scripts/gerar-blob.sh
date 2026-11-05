#!/usr/bin/env bash
# Gera o arquivo de 12 MB usado pelo teste de download (não é versionado no Git).
set -e
cd "$(dirname "$0")/.."
mkdir -p speed
head -c 12582912 /dev/urandom > speed/blob.wav
echo "speed/blob.wav criado (12 MB)"
