from django.shortcuts import render
from django.http import HttpResponse
from bs4 import BeautifulSoup
import os
import sqlite3

from CRUD import CRUD

class Pages:
    def __init__(self):
        self.Database = CRUD()

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

    def blog(self, request):
        pageFile = os.path.join(self.rootdir, "blog.html")


        self.Database.Create(table="Blog", columns=("ID", "Title", "Pictures", "Paragraph", "Rating",),
                                     values=("test", "Test Title", "Test Pictures", "<p> Test Paragraph </p>", 0.5,))


        _id = self.Database.Read("Blog", "ID", "test")
        title = self.Database.Read("Blog", "Title", "test")
        rating = self.Database.Read("Blog", "Rating", "test")
        pictures = self.Database.Read("Blog", "Pictures", "test")
        paragraph = self.Database.Read("Blog", "Paragraph", "test")

        context = {
            "ID": "testID",
            "Title": title,
            "Rating": rating,
            "Pictures": pictures,
            'Paragraph': paragraph,
        }

        return render(request, pageFile, context)