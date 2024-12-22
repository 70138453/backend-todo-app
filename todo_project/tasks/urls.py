from django.urls import path
from .views import TaskListCreateAPIView, TaskRetrieveDestroyAPIView

urlpatterns = [
    path('tasks/', TaskListCreateAPIView.as_view(), name='task-list-create'),
    path('tasks/<int:pk>/', TaskRetrieveDestroyAPIView.as_view(), name='task-retrieve-destroy'),
]
