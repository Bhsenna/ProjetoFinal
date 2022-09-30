from django.urls import path
from . import views

urlpatterns = [
    path('criador-<int:id_prova>', views.movel, name='criador'),
]