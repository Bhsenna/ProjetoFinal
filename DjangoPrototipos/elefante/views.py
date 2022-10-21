from django.shortcuts import render, get_object_or_404, redirect, get_list_or_404, HttpResponseRedirect
from django.urls import reverse
from .forms import *
from .models import Paper, Prova
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from hashids import Hashids
hashids = Hashids(salt="QuickTest", min_length=16)


# Create your views here.

def SignUp(request):
    if request.method == 'GET':
        form = cadaa()
        return render(request, 'elefante/register.html', {'form': form})
    else:
        username = request.POST.get('username')
        email = request.POST.get('email')
        senha = request.POST.get('password1')

        user = User.objects.filter(email=email).first()

        if user:
            form = cadaa()
            return redirect(request, 'elefante/register.html', {'form': form})
        user = User.objects.create_user(username=username, email=email, password=senha)
        user.save()

        return redirect('accounts/login')


@login_required
def movel(request, link_prova):
    prova = get_object_or_404(Prova, link=link_prova)
    paper = Paper.objects.filter(id_prova=prova.id, tipo_user='C')

    def apagar():
        things = Paper.objects.filter(id_prova=prova.id, tipo_user='C')
        for i in things:
            if len(Paper.objects.filter(id_prova=prova.id, tipo_user='C', numero_questao=i.numero_questao,
                                        letra_questao=i.letra_questao)) > 1:
                i.delete()

    if request.method == 'GET':
        form = Cadastro()
    else:
        form = Cadastro(request.POST)
        if form.is_valid():
            cadastro = form.save()
            form = Cadastro()
            apagar()
    return render(request, 'elefante/telacriacao.html',
                  {'form': form, 'prova': prova, 'papers': paper, 'apagar': apagar})


@login_required
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
    return render(request, 'elefante/telaresolucao.html',
                  {'form': form, 'papers': paper, 'id': prova.id, 'link': link_prova, 'usuario': request.user.id})


@login_required
def nota(request, link_prova, usuario):
    prova = get_object_or_404(Prova, link=link_prova)
    paper = get_list_or_404(Paper, id_prova=prova.id, usuario=usuario)
    return render(request, 'elefante/nota.html', {'notas': paper})


@login_required
def recentes(request):
    prova = Prova.objects.filter(dono=request.user)

    def gerar_link():
        return hashids.encode(randint(0, 9223372036854775807))

    if request.method == 'GET':
        form = NewProva()
    else:
        form = NewProva(request.POST)
        if form.is_valid():
            cadastro = form.save()
            form = NewProva()
            return HttpResponseRedirect(reverse('criador', args=[cadastro.link]))
    return render(request, 'elefante/telarecentes.html', {'usuario': request.user.id, 'provas': prova, 'form': form, 'link': gerar_link})


@login_required
def homepage(request):
    def gerar_link():
        return hashids.encode(randint(0, 9223372036854775807))

    if request.method == 'GET':
        form = NewProva()
    else:
        form = NewProva(request.POST)
        if form.is_valid():
            cadastro = form.save()
            form = NewProva()
            return HttpResponseRedirect(reverse('criador', args=[cadastro.link]))
    return render(request, 'elefante/telahomepage.html', {'usuario': request.user.id, 'form': form, 'link': gerar_link})
