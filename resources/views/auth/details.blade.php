@if(!empty($gad->resident_id))
<div class="col-sm-4">
    <div class="form-group">
        @if(empty($gad->images))
         <img class="img" src="/images/none-image.png" style="height:150px;width=200px;">
        @else
        <img class="img" src="{{asset('images/').'/'.$gad->images}}". style="height:150px;width=200px;">
        @endif
    </div>
    </div>

    <div class="col-sm-8">
    <div class="form-group">
        <label>Full Name</label>
        <h5>{{$gad->last_name ?? ''}} , {{$gad->first_name ?? ''}} {{$gad->middle_name ?? ''}}</h5>
        <label>Address</label>
        <h5>{{$gad->block_lot_house_id ?? ''}} {{$gad->building_no ?? ''}} {{$gad->sitio_names ?? ''}} {{$gad->purok_names ?? ''}} {{$gad->barangays_name ?? ''}}</h5>
    </div>
</div>
@else
<div class="col-md-12">
<div class="error" for="email">
<br>
   <p style="color:red;">Your Resident ID is Invalid</p>
</div>
</div>
@endif