from django.db import models


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


class Paper(models.Model):
    TIPOS_USER = (
        ("C", "Criador"),
        ("A", "Aluno")
    )

    TIPOS_QUESTAO = (
        ("C", "Combo"),
        ("M", "Multipla"),
        ("L", "Ligar"),
    )

    id = models.AutoField(primary_key=True)
    usuario = models.ForeignKey(DadosCadastro, on_delete=models.DO_NOTHING)
    tipo_user = models.CharField(max_length=1, choices=TIPOS_USER)
    id_prova = models.ForeignKey(Prova, on_delete=models.DO_NOTHING)
    tipo_questao = models.CharField(max_length=1, choices=TIPOS_QUESTAO)
    numero_questao = models.IntegerField()
    enunciado = models.TextField()
    letra_questao = models.CharField(max_length=1)
    texto1 = models.TextField()
    texto2 = models.TextField()
    alt_marcada = models.TextField()
    alt_erradas = models.TextField()
    correto = models.BooleanField()