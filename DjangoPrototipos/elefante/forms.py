from django import forms
from .models import *


class Cadastro(forms.ModelForm):
    class Meta:
        model = Paper
        fields = [
            'usuario',
            'tipo_user',
            'id_prova',
            'tipo_questao',
            'numero_questao',
            'enunciado',
            'letra_questao',
            'texto1',
            'texto2',
            'alt_marcada',
            'alt_erradas',
            'correto',
        ]