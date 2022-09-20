from django.shortcuts import render

# Create your views here.


def movel(request):
    return render(request, 'elefante/index.html')