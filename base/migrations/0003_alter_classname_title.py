# Generated by Django 3.2.5 on 2021-07-08 15:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_auto_20210706_1816'),
    ]

    operations = [
        migrations.AlterField(
            model_name='classname',
            name='title',
            field=models.CharField(max_length=25),
        ),
    ]
