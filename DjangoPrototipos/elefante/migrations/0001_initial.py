# Generated by Django 4.1 on 2022-09-29 18:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DadosCadastro',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nome', models.CharField(max_length=30)),
                ('email', models.EmailField(max_length=254)),
                ('senha', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Prova',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('dono', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='elefante.dadoscadastro')),
            ],
        ),
        migrations.CreateModel(
            name='Paper',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('tipo_user', models.CharField(choices=[('C', 'Criador'), ('A', 'Aluno')], max_length=1)),
                ('tipo_questao', models.CharField(choices=[('C', 'Combo'), ('M', 'Multipla'), ('L', 'Ligar')], max_length=1)),
                ('numero_questao', models.IntegerField()),
                ('enunciado', models.TextField()),
                ('letra_questao', models.CharField(max_length=1)),
                ('texto1', models.TextField()),
                ('texto2', models.TextField()),
                ('alt_marcada', models.TextField()),
                ('alt_erradas', models.TextField()),
                ('correto', models.BooleanField()),
                ('id_prova', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='elefante.prova')),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='elefante.dadoscadastro')),
            ],
        ),
    ]
