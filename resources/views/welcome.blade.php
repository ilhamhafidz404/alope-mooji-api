<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <link rel="stylesheet" href="{{ asset('css/tailwind.css') }}">
        <style>
            .router-link-active{
                background-color: red
            }
        </style>
    </head>
    <body>
        
        <div id="app">
            <nav-component></nav-component>
            
            <router-view></router-view>
        </div>

        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
