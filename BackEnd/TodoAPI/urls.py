from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('notes/',views.viewNotes,name='notes'),
    path('notes/<str:pk>/',views.viewNote,name='note'),
]