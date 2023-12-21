#!/bin/sh

echo "Collecting statics..."
python manage.py collectstatic --noinput

echo "Make migrations..."
python manage.py makemigrations

echo "Migration..."
python manage.py migrate

echo "Starting server..."
gunicorn 'to_do_django.wsgi' --bind=0.0.0.0:8000

ENTRYPOINT ["/app/docker-entrypoint.sh"]
