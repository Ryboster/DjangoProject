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
        return render(request, pageFile)

    def blank(self,request):
        pageFile = os.path.join(self.rootdir, "blank.html")
        return render(request, pageFile)