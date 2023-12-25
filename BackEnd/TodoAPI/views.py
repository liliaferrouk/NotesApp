from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer

@api_view(['GET'])
def index(request):
    #just to show an overview of how our api works
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

@api_view(['GET','POST'])
def viewNotes(request):
    if request.method == 'GET':
        notes = Note.objects.all().order_by('-updated')
        serializedNotes = NoteSerializer(notes, many=True)
        return Response(serializedNotes.data,status=status.HTTP_200_OK)

    if request.method == 'POST':
        data = request.data
        note = Note.objects.create(
            body=data['body']
        )
        serializer = NoteSerializer(note, many=False)
        return Response(serializer.data,status=status.HTTP_200_OK)

@api_view(['GET','PUT','DELETE'])
def viewNote(request,pk):
    if request.method == 'GET':
        note = Note.objects.get(id=pk)
        if(note):
            serializedNote = NoteSerializer(note, many=False)
            return Response(serializedNote.data,status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    if request.method == 'PUT':
        data = request.data
        note = Note.objects.get(id=pk)
        serializer = NoteSerializer(instance=note, data=data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data,status=status.HTTP_200_OK)

    if request.method == 'DELETE':
        note = Note.objects.get(id=pk)
        note.delete()
        return Response("Note was deleted!",status=status.HTTP_200_OK)