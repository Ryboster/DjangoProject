"""
URL configuration for serv1 project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
#from django.contrib import admin
from django.urls import path
from app1.views import Pages

views = Pages()

urlpatterns = [
    #path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('blank', views.blank, name="blank"),
    path('blog', views.blog, name="blog"),
    path('blog/<str:post_id>/', views.blog, name='blog_detail'),

    path('update/', views.DatabaseAPI.update, name='update'),
    path('delete/', views.DatabaseAPI.delete, name='delete'),
    
    path('create_post/', views.DatabaseAPI.createPost, name="create_post"),
    path('delete_post/', views.DatabaseAPI.deletePost, name='delete_post'),

    path('add_picture/', views.DatabaseAPI.addPicture, name="add_picture"),
]
