#!/bin/sh

echo "Migrate with Alembic..."
alembic upgrade head

echo "Starting server..."
uvicorn app.main:app --host 0.0.0.0 --port 8000 --proxy-headers

ENTRYPOINT ["/app/docker-entrypoint.sh"]