<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <link rel="apple-touch-icon" sizes="76x76" href="{{ url('/md/img/calamba-logo.png') }}">
    <link rel="icon" type="image/png" href="{{ url('/md/img/calamba-logo.png') }}">
    <link rel="manifest" href="{{ url('manifest.json') }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <title>
        {{ trans('panel.site_title') }}
    </title>
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
    <meta name="app-locale" content="{{ App::getLocale() }}">

    {{-- Fonts and icons --}}
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">
    <link rel="stylesheet" href="{{ url('/md/css/material-dashboard.css') }}">

    <link rel="stylesheet" href="{{ url('/css/custom.css') }}">

    <script>
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js');
            });
        }
    </script>
    <script src="{{ url('/md/js/core/jquery.min.js') }} "></script>
    <script src="{{ url('/md/js/core/popper.min.js') }} "></script>
    <script src="{{ url('/md/js/core/bootstrap-material-design.min.js') }} "></script>
    <script src="{{ url('/md/js/plugins/perfect-scrollbar.jquery.min.js') }} "></script>
    <script src="{{ url('/md/js/plugins/bootstrap-notify.js') }} "></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
</head>

<body class="off-canvas-sidebar">
    @yield('content')

</body>

</html>
<script>
    function searchData() {
        var id = $('#resident_id').val();
        axios.get('/search', {
            params: {
                id: id
            }
        }).then(function(response) {
            $("div#details").html(response.data);
        })
    }
</script>
