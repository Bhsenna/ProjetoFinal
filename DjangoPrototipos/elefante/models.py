from django.db import models


# Create your models here.
class Paper(models.Model):
    id_prova = models.AutoField(primary_key=True)
    questoes = models.TextField()