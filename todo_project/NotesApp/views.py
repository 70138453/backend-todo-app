from django.shortcuts import render
from django .contrib.auth.models import user
from .models import  Notes
from .serializers import NotesSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class NotesCreate(generics.CreateAPIView):
    queryset=Notes.objects.all()
    serializer_class=NotesSerializer
    permission_classes=[IsAuthenticated]
    
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    class NotesList(generics.ListAPIView):
        queryset=Notes.objects.all()
        serializer_class=NotesSerializer
        permission_classes=[IsAuthenticated]

