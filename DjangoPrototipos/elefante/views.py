from django.shortcuts import render, get_object_or_404
from .models import Paper, Prova, DadosCadastro
from .forms import Cadastro

# Create your views here.


def movel(request, id_prova):
    prova = get_object_or_404(Prova, id=id_prova)
    if request.method == 'GET':
        form = Cadastro()
        return render(request, 'elefante/index.html', {'form': form, 'prova': prova})
    else:
        form = Cadastro(request.POST)
        if form.is_valid():
            cadastro = form.save()
            form = Cadastro()
            return render(request, 'elefante/index.html', {'form': form, 'prova': prova})
        else:
            return render(request, 'elefante/index.html', {'form': form, 'prova': prova})