from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.userLogin, name='login'),
    path('logout/', views.userLogin, name='logout')
]