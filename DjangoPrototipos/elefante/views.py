from django.shortcuts import render

# Create your views here.


def tela(request):
    return render(request, 'elefante/QuestionType1.html')


def movel(request):
    return render(request, 'elefante/index.html')