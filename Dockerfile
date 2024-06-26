FROM python:3.8-slim

WORKDIR /code

COPY requirements.txt /code/
RUN pip install --no-cache-dir -r requirements.txt

COPY app.py /code/
COPY /datas/ /code/datas/
COPY /static/ /code/static/
COPY /templates/ /code/templates/

EXPOSE 5000

ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0


CMD ["flask", "--app","app", "run"]