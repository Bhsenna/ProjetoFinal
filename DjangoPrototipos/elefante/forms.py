from django import forms
from .models import *


class Cadastro(forms.ModelForm):
    class Meta:
        model = Paper
        fields = [
            # 'questoes',
        ]