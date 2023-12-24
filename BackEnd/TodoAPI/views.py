from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer

@api_view(['GET'])
def index(request):
    #juste to show an overview of how our api works
    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
    return Response(routes,status=status.HTTP_200_OK)

@api_view(['GET'])
def getNotes(request):
    notes = Note.objects.all()
    serializedNotes = NoteSerializer(notes, many=True)
    return Response(serializedNotes.data,status=status.HTTP_200_OK)

@api_view(['GET'])
def getNote(request,pk):
    note = Note.objects.get(id=pk)
    if(note):
        serializedNote = NoteSerializer(note, many=False)
        return Response(serializedNote.data,status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)