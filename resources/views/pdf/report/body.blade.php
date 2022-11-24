@extends('pdf.report.layout')

@section('title', $file_name)

@section('content')
<table>
    <tr>
        <th style="text-align: center">
        </th>
        <th style="text-align: left">
            <img src={{$logo}} style="width:100px;" class="pull-left">
        </th>
        <th style="text-align: left">
            <p style=" font-weight: 700;">
                <b>REPUBLIC OF THE PHILIPPINES</b>
                <br />
                <b>PROVINCE OF LAGUNA</b>
                <br />
                <b>CITY OF CALAMBA</b>
                <br />
            <p style="font-weight: 900;text-transform: uppercase;margin-top: -8%;margin-left: 8px;">BARANGAY {{ $barangay }}</p>
            </p>
        </th>
        <th style="text-align: right">
            <img src="/transaction/transparent_logo.png" class="pull-left" style="width:100px;" />
        </th>
    </tr>
    <br>
    </br>
    <thead>
        <tr>
            <th>ID</th>
            <th>Member Name</th>
            <th>Sex</th>
            <th>Barangay</th>
            <th>Age</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($gads as $gad)
        <tr>
            <td style=" text-align: center">{{ $gad['id'] ?? '' }}</td>
            <td style=" text-align: center">{{ $gad['full_name'] ?? '' }}</td>
            <td style=" text-align: center">{{ $gad['gender']['gender_name'] ?? '' }}</td>
            <td style=" text-align: center">{{ $gad['barangay']['barangay_name'] ?? '' }}</td>
            <td style=" text-align: center">{{ $gad['age'] ?? '' }}</td>
        </tr>
        @endforeach
    </tbody>
</table>
@endsection

@section('style')
<style>
    table {
        width: 100%;
        font-size: 13px;
    }

    td,
    th {
        font-size: 13px;
        color: #7A7C7F;
    }

    tr {
        margin: 10px !important;
    }
</style>
@endsection
