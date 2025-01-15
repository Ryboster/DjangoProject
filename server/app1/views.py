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
        self.Database.Create("Home", columns=("ID", "TextContent", "Picture", ), values=(0, "# Title", "handsome_man.png",))
        self.Database.Create("Socials", columns=("ID", "DATA",), values=("LinkedIn", json.dumps({"li.svg": "https://www.linkedin.com/"}),))
        self.Database.Create("Skills", columns=("ID", "DATA",), values=("Languages", json.dumps({"Python": 99, "C#": 90, "JavaScript": 75, "HTML": 90}),))
        self.Database.Create("Skills", columns=("ID", "DATA",), values=("Frameworks", json.dumps({"Django": 80, "ReactJS": 20, "Pygame": 95, "Unity": 100}),))
        pageFile = os.path.join(self.rootdir, "index.html")

        textContent = self.Database.Read("Home", "TextContent", 0)
        picture = self.Database.Read("Home", "Picture", 0)

        skillsIds = self.Database.fetchAllIds("Skills")
        socialsIds = self.Database.fetchAllIds("Socials")

        skills = dict()
        socials = dict()

        if (len(skillsIds) > 0):
            for skillsId in skillsIds:

                skillsData = json.loads(self.Database.Read("Skills", "DATA", skillsId))
                skills[skillsId] = skillsData
                

        if(len(socialsIds) > 0):
            for socialsId in socialsIds:
                socialsData = json.loads(self.Database.Read("Socials", "DATA", socialsId))
                socials[socialsId] = socialsData
                


        context = {
        'variable1': 'Hello, Django!',
        'skills': skills,
        'socials': socials,
        'textContent': textContent,
        'picture': picture
        }

        return render(request, pageFile, context)


    def blank(self,request):
        pageFile = os.path.join(self.rootdir, "blank.html")
        return render(request, pageFile)

    def blog(self, request, post_id='test'):
        pageFile = os.path.join(self.rootdir, "blog.html")

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