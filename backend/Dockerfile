FROM ubuntu:21.04 AS base
WORKDIR /opt/python/backend
ENV POETRY_VIRTUALENVS_CREATE=0
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y \
python3-dev \
git \
python \
python3 \
python3-dev \
python3-pip \
curl
RUN curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python -


FROM base as development


FROM base AS production
RUN poetry install --no-dev


