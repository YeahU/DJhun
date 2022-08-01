from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return render(request, 'polls/index.html')

def otrher(request):
    return render(request, 'polls/troll.html')

# Create your views here.
