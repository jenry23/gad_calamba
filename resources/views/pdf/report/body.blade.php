@extends('pdf.report.layout')

@section('title', $file_name)

@section('content')
<div>
    <table>
        <thead>
            <tr>
                <th colspan="1">
                    @if($logo)
                    <img src={{$logo}} style="width:100px;margin-right:40px;">
                    @endif
                </th>
                <th colspan="2">
                    <p style=" font-weight: 700;">
                        <b>REPUBLIC OF THE PHILIPPINES</b>
                        <br />
                        <b>PROVINCE OF LAGUNA</b>
                        <br />
                        <b>CITY OF CALAMBA</b>
                        <br />
                    <p style="font-weight: 900;text-transform: uppercase;margin-top: -8%;">BARANGAY {{ $barangay }}</p>
                    </p>
                </th>
                <th>
                    <img src="/transaction/transparent_logo.png" class="pull-left" style="width:100px;" />
                </th>
            </tr>
            <tr>
                <th>Item No.</th>
                <th>Member Name</th>
                <th>Sex</th>
                <th>Barangay</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($gads as $key => $gad)
            <tr>
                <td style=" text-align: center">{{ $key+1 ?? '' }}</td>
                <td style=" text-align: left">{{ $gad['full_name'] ?? '' }}</td>
                <td style=" text-align: center">{{ $gad['gender']['gender_name'] ?? '' }}</td>
                <td style=" text-align: center">{{ $gad['barangay']['barangay_name'] ?? '' }}</td>
                <td style=" text-align: center">{{ $gad['age'] ?? '' }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
</div>
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
