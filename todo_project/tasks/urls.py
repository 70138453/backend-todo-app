# tasks/urls.py
from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import SignUpView  # Import your custom signup view

urlpatterns = [
    # Token-based authentication endpoints
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # Login endpoint
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Token refresh endpoint

    # Custom signup endpoint
    path('api/token/signup/', SignUpView.as_view(), name='signup'),  # Custom signup view
]
