
from django.urls import path
from .views import SignUpView, SignInView, HomeView

urlpatterns = [
    path('', HomeView.as_view(), name='home'),         # Default home page
    path('signup/', SignUpView.as_view(), name='sign-up'),  # Sign up page
    path('signin/', SignInView.as_view(), name='sign-in'),  # Sign in page
]

