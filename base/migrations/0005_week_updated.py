# Generated by Django 3.2.5 on 2021-07-16 13:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_auto_20210711_1227'),
    ]

    operations = [
        migrations.AddField(
            model_name='week',
            name='updated',
            field=models.DateTimeField(auto_now=True),
        ),
    ]