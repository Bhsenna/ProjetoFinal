from django.urls import path
from . import views

urlpatterns = [
    path('criador/<str:link_prova>', views.movel, name='home'),
    path('res/<str:link_prova>', views.resolver, name='resol'),
]