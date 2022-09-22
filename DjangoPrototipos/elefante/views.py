from django.shortcuts import render
from .models import Paper
from .forms import Cadastro

# Create your views here.


def movel(request):
    if request.method == 'GET':
        form = Cadastro()
        return render(request, 'elefante/index.html', {'form': form})
    else:
        form = Cadastro(request.POST)
        if form.is_valid():
            cadastro = form.save()
            form = Cadastro()
            return render(request, 'elefante/index.html', {'form': form})
        else:
            return render(request, 'elefante/index.html', {'form': form})