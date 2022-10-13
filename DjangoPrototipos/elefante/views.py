from django.shortcuts import render, get_object_or_404, get_list_or_404
from .models import Paper, Prova, DadosCadastro
from .forms import Cadastro

# Create your views here.


def movel(request, link_prova):
    prova = get_object_or_404(Prova, link=link_prova)
    if request.method == 'GET':
        form = Cadastro()
    else:
        form = Cadastro(request.POST)
        if form.is_valid():
            cadastro = form.save()
            form = Cadastro()
    return render(request, 'elefante/index.html', {'form': form, 'prova': prova})


def resolver(request, link_prova):
    prova = get_object_or_404(Prova, link=link_prova)
    paper = get_list_or_404(Paper, id_prova=prova.id)
    if request.method == 'GET':
        form = Cadastro()
    else:
        form = Cadastro(request.POST)
        if form.is_valid():
            cadastro = form.save()
            form = Cadastro()
    return render(request, 'elefante/resultado.html', {'form': form, 'papers': paper, 'id': prova.id,})