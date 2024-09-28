from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from rest_framework.response import Response
from rest_framework import status

# Create your views here.


# user login view

def userLogin(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(username = username, password = password)

    if user:
        login(request, user)
        return Response({'message':"login succeessful"}, status=status.HTTP_200_OK)
    else:
        return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

def userLogout(request):
    logout(request)
    return Response({"message": "Logged out successfully"}, status=status.HTTP_200_OK)