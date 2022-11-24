<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>@yield('title')</title>
        <style>
            @page {
                header: page-header;
                footer: page-footer;
            }
        </style>
        @yield('style')
    </head>
    <body>
        @include('pdf.header')
        @yield('content')
        @include('pdf.footer')
    </body>
</html>
