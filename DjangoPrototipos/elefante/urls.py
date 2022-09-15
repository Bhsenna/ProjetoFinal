from django.urls import path
from . import views

urlpatterns = [
    path('', views.tela),
    path('movel', views.movel),
]