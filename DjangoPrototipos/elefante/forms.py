from .models import *
from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.forms import ModelForm


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

class cadaa(UserCreationForm):
    # email = forms.EmailField(required=True)
    # def __init__(self, *args, **kwargs):
    #     super().__init__(*args, **kwargs)
    #     self.fields['username'].widget.attrs.update({
    #             'required':'',
    #             'name':'username',
    #             'placeholder':'digite seu nome'
    #     })
    username = forms.CharField(label='Username', max_length=100)
    email = forms.EmailField(label='Email')
    password1 = forms.CharField(label='Senha', widget=forms.PasswordInput)