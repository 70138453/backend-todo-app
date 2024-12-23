from django.urls import path
from .views import TaskListCreateAPIView, TaskRetrieveDestroyAPIView, SignUpView

urlpatterns = [
    path('', TaskListCreateAPIView.as_view(), name='task-list-create'),
    path('<int:pk>/', TaskRetrieveDestroyAPIView.as_view(), name='task-retrieve-destroy'),
    path('signup/', SignUpView.as_view(), name='signup'),
]
