from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpResponseRedirect
import json
from bs4 import BeautifulSoup
import os
import sqlite3
from django import template
from CRUD import CRUD


class Pages:
    def __init__(self):
        register = template.Library()
        self.Database = CRUD()
        self.DatabaseAPI = CRUD_Endpoints(self.Database)
        self.rootdir = os.path.join("app1", "pages")
        pass

    def home(self, request):
        pageFile = os.path.join(self.rootdir, "index.html")
        context = {
        'variable1': 'Hello, Django!'
        }
        return render(request, pageFile, context)

    def blank(self,request):
        pageFile = os.path.join(self.rootdir, "blank.html")
        return render(request, pageFile)

    def blog(self, request, post_id='test'):
        pageFile = os.path.join(self.rootdir, "blog.html")
        markdown_string = """# Dark Souls 1"""

        self.Database.Create(table="Blog", columns=("ID", "Title", "Pictures", "Paragraph", "Rating",),
                                     values=("test", "Test Title", json.dumps(list(["ds1.png"])), markdown_string, 0.5,))

        _id = self.Database.Read("Blog", "ID", post_id)
        title = self.Database.Read("Blog", "Title", post_id)
        rating = self.Database.Read("Blog", "Rating", post_id)
        pictures = self.Database.Read("Blog", "Pictures", post_id)
        paragraph = self.Database.Read("Blog", "Paragraph", post_id)

        try:
            pictures = json.loads(pictures)
        except:
            pass

        endpoints = self.Database.fetchAllIds("Blog")
        
        titles = []
        for endpoint in endpoints:
            titles.append(self.Database.Read("Blog", "Title", endpoint))

        endpointPairs = zip(endpoints, titles)

        context = {
            "ID": _id,
            "Title": title,
            "Rating": rating,
            "Pictures": pictures,
            'Paragraph': paragraph,
            "EndpointPairs": endpointPairs,
        }

        return render(request, pageFile, context)



class CRUD_Endpoints():
    def __init__(self, database):
        self.Database = database
        pass

    def addPicture(self, request):
        if request.method == "POST":
            submitted_values = request.POST

            pictures = self.Database.Read(table=submitted_values['table'],
                                          column=submitted_values['column'],
                                          _id=submitted_values['ID'])

            try:
                pictures = json.loads(pictures)
                pictures.append(submitted_values['new_picture'])
            except:
                pictures = [submitted_values['new_picture']]

            self.Database.Update(table=submitted_values['table'],
                                 column=submitted_values['column'],
                                 newValue=json.dumps(pictures),
                                 _id=submitted_values['ID'])

            referer = request.META.get('HTTP_REFERER')
            if referer:
                return HttpResponseRedirect(referer)

        return HttpResponse("Invalid request", status=400)


    def deletePost(self, request):
        if request.method == 'POST':
            submitted_values = request.POST
            self.Database.Delete(table=submitted_values['table'],
                                 _id=submitted_values['ID'])

            return HttpResponseRedirect('/blog')

        return HttpResponse("Invalid request", status=400)


    def update(self, request):
        if request.method == 'POST':
            
            submitted_values = request.POST

            if submitted_values['new_value'] == "":
                intKey = 0
                pictures = list()

                while True:
                    try:
                        if submitted_values[f"{intKey}"]:
                            pictures.append(submitted_values[f'{intKey}'])
                        intKey += 1
                    except:
                        break

                self.Database.Update(table=submitted_values['table'],
                            column=submitted_values['column'],
                            newValue=json.dumps(pictures),
                            _id=submitted_values['ID'])

            else:
                self.Database.Update(table=submitted_values['table'],
                            column=submitted_values['column'],
                            newValue=submitted_values['new_value'],
                            _id=submitted_values['ID'])
            
        referer = request.META.get('HTTP_REFERER')
        if referer:
            return HttpResponseRedirect(referer)

        return HttpResponse("Invalid request", status=400)

    def delete(self, request):
        if request.method == 'POST':
            submitted_values = request.POST
            

            self.Database.Update(table=submitted_values['table'],
                                column=submitted_values['column'],
                                newValue= None,
                                _id=submitted_values['ID'])
            
            referer = request.META.get('HTTP_REFERER')
        if referer:
            return HttpResponseRedirect(referer)

    def createPost(self, request):
        if request.method == 'POST':
            submitted_values = request.POST
            
            self.Database.Create(table=submitted_values['table'],
                                 columns=("ID", "Title",),
                                 values=(submitted_values['ID'], submitted_values['title']))

            referer = request.META.get('HTTP_REFERER')
        if referer:
            return HttpResponseRedirect(referer)