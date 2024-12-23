from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import ValidationError
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.generics import ListCreateAPIView, RetrieveDestroyAPIView
from .models import Task
from .serializers import TaskSerializer


# Task List and Create API View
class TaskListCreateAPIView(ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


# Task Retrieve and Destroy API View
class TaskRetrieveDestroyAPIView(RetrieveDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


# User Sign Up View
class SignUpView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        if User.objects.filter(username=username).exists():
            raise ValidationError("User with this username already exists.")

        user = User.objects.create_user(username=username, password=password)
        user.save()

        refresh = RefreshToken.for_user(user)
        return Response({
            'access': str(refresh.access_token),
            'refresh': str(refresh),
        }, status=status.HTTP_201_CREATED)
