# Generated by Django 4.1 on 2022-10-04 20:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('elefante', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paper',
            name='texto1',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='paper',
            name='texto2',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='paper',
            name='tipo_questao',
            field=models.CharField(choices=[('tipo1', 'Combo'), ('tipo2', 'Multipla'), ('tipo3', 'Ligar')], max_length=5),
        ),
    ]
