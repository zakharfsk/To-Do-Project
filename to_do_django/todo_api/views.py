from drf_spectacular.utils import extend_schema
from rest_framework import viewsets

from .models import ToDo
from .serializers import ToDoSerializer


@extend_schema(tags=["ToDo"])
class ToDoModelViewSet(viewsets.ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer

