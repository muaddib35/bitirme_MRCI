FROM python:3.8-slim

WORKDIR /code

COPY requirements.txt /code/
COPY app.py /code/
COPY /datas/ /code/datas/
COPY /static/ /code/static/
COPY /templates/ /code/templates/

EXPOSE 5000

ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0


CMD ["flask", "run"]
