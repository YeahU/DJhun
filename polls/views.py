from django.shortcuts import render
from django.http import HttpResponse, JsonResponse


def index(request):
    return render(request, 'polls/index.html')

def otrher(request):
    return render(request, 'polls/troll.html')

def event(request):
    return render(request, 'polls/event.html')

def event2(request):
    return render(request, 'polls/event2.html')

def show_eng(request):
    input_val=request.GET.get('input_val')
    print(input_val)

    if input_val=='영어':
        eng='한국어'
    elif input_val=='한국어':
        eng='영어'

    context={'eng': eng}
    return JsonResponse(context)
# def show_eng(request):
#     input_val = request.GET.get('input_val')
#     print(input_val)
#     if input_val == '영어':
#         eng = '한글'
#     else:
#         eng = '영어'
#
#     context={'eng': eng}
#     # return render(request, 'polls/event.html', context)
#     return JsonResponse(context)
# Create your views here.
