from django.db import models
from hashids import Hashids
from random import randint
hashids = Hashids(salt="QuickTest", min_length=16)


# Create your models here.
class DadosCadastro(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=30)
    email = models.EmailField()
    senha = models.CharField(max_length=20)

    def __str__(self):
        return self.nome


class Prova(models.Model):
    id = models.AutoField(primary_key=True)
    dono = models.ForeignKey(DadosCadastro, on_delete=models.DO_NOTHING)
    link_gen = hashids.encode(randint(0, 9223372036854775807))
    link = models.CharField(max_length=20, default=link_gen, unique=True)

    def __str__(self):
        return str(self.dono) + " - " + str(self.link)


class Paper(models.Model):
    TIPOS_USER = (
        ("C", "Criador"),
        ("A", "Aluno")
    )

    TIPOS_QUESTAO = (
        ("tipo1", "Combo"),
        ("tipo2", "Multipla"),
        ("tipo3", "Ligar"),
    )

    id = models.AutoField(primary_key=True)
    usuario = models.ForeignKey(DadosCadastro, on_delete=models.DO_NOTHING)
    tipo_user = models.CharField(max_length=1, choices=TIPOS_USER)
    id_prova = models.ForeignKey(Prova, on_delete=models.DO_NOTHING)
    tipo_questao = models.CharField(max_length=5, choices=TIPOS_QUESTAO)
    numero_questao = models.IntegerField()
    enunciado = models.TextField()
    letra_questao = models.CharField(max_length=1)
    texto1 = models.TextField(blank=True)
    texto2 = models.TextField(blank=True)
    alt_marcada = models.TextField()
    alt_erradas = models.TextField()
    correto = models.BooleanField(default=True)

    def alternativas(self):
        return self.alt_erradas[:-1].split(', ')