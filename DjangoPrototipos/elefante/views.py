from django.shortcuts import render, get_object_or_404, redirect, get_list_or_404
from .forms import *
from .models import Paper, Prova
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User

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
    return render(request, 'elefante/telacriacao.html', {'form': form, 'prova': prova, 'papers': paper, 'apagar': apagar})

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
    return render(request, 'elefante/telaresolucao.html', {'form': form, 'papers': paper, 'id': prova.id, 'link': link_prova})

@login_required
def nota(request, link_prova, usuario):
    prova = get_object_or_404(Prova, link=link_prova)
    paper = get_list_or_404(Paper, id_prova=prova.id, usuario=usuario)
    return render(request, 'elefante/nota.html', {'notas': paper})

@login_required
def homepage(request):
    return render(request, 'elefante/telahomepage.html')