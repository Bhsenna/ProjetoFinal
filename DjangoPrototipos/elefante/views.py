from django.shortcuts import render, get_object_or_404, get_list_or_404
from .models import Paper, Prova, DadosCadastro
from .forms import Cadastro

# Create your views here.


def movel(request, link_prova):
    prova = get_object_or_404(Prova, link=link_prova)
    paper = Paper.objects.filter(id_prova=prova.id, tipo_user='C')

    def apagar():
        things = Paper.objects.filter(id_prova=prova.id, tipo_user='C')
        for i in things:
            if len(Paper.objects.filter(id_prova=prova.id, tipo_user='C', numero_questao=i.numero_questao, letra_questao=i.letra_questao)) > 1:
                i.delete()

    if request.method == 'GET':
        form = Cadastro()
    else:
        form = Cadastro(request.POST)
        if form.is_valid():
            cadastro = form.save()
            form = Cadastro()
            apagar()
    return render(request, 'elefante/index.html', {'form': form, 'prova': prova, 'papers': paper, 'apagar': apagar})


def resolver(request, link_prova):
    prova = get_object_or_404(Prova, link=link_prova)
    paper = get_list_or_404(Paper, id_prova=prova.id, tipo_user='C')
    if request.method == 'GET':
        form = Cadastro()
    else:
        form = Cadastro(request.POST)
        if form.is_valid():
            cadastro = form.save()
            form = Cadastro()
    return render(request, 'elefante/resultado.html', {'form': form, 'papers': paper, 'id': prova.id, 'link': link_prova})


def nota(request, link_prova, usuario):
    prova = get_object_or_404(Prova, link=link_prova)
    paper = get_list_or_404(Paper, id_prova=prova.id, usuario=usuario)
    return render(request, 'elefante/nota.html', {'notas': paper})