from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.userLogin, name='login'),
     path('dashboard/', views.DashboardView.as_view(), name='dashboard'),
    # path('logout/', views.userLogin, name='logout'),
]