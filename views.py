from django.shortcuts import render

from django.http import HttpResponse
from .forms import usersform
def home(request):
    context ={}
    form = usersform(request.POST or None, request.FILES or None)
    context['form']= form
    if form.is_valid():
        form.save()
        x=request.POST['name']
        y=request.POST['city']
        z=request.POST['Emailfield']
        return render(request,"display.html",{'name':x,'city':y,'Emailfield':z})
    else:
        return render(request, "home.html", context)


# Create your views here.
