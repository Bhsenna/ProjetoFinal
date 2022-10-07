from django.urls import path
from . import views

urlpatterns = [
    path('criador/<str:link_prova>', views.movel, name='criador'),
]