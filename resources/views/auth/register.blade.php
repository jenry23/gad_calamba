@extends('layouts.app')
@section('content')
<div class="wrapper wrapper-full-page">
    <div class="page-header register-page header-filter">
        <div class="container">
                @php
                $plans = \App\Models\Plans::all();
                $i = 1;
                @endphp
                <div class="row">
                @foreach ($plans as $item)
                    <div class="card-body ml-2">
                      <div class="card">
                           <div class="card-header" style="background-color: #8B008B;">
                              <h4 class="card-title">
                          <strong style="color:white;">{{$item['description']}}</strong>
                        </h4>
                        </div>
                        <br>
                        <center>
                            <div class="price pt-0">
                              <h2 class="number orange-text mb-0">
                                  $ {{ $item['cost'] }} /month
                              </h2>
                              </div>
                                  <div class="card-body">
                                      <h5 class="card-title">{{ $item['name'] }}</h5>
                                      </p>
                                  </div>
                                      <div class="plan__footer">
                                          <form action="/payment" method="GET">
                                            <input type="hidden" name="amount" id="amount" value="<?php echo $item['cost']?>">
                                            <input type="hidden" name="description" id="description" value="<?php echo $item['description']?>">
                                            <script
                                            src="https://checkout.stripe.com/checkout.js" class="stripe-button"
                                            data-key="pk_test_51IShqvDBrLv03ZFnYLiidxC5jiBlzh9EXwlwPeO54cUtCJrgBnicvipCHNaxCbxgyYDG6ecn5kQcznAQfte5qo7C00HAac3a3r"
                                            data-amount="<?php echo $item['cost']; ?>"
                                            data-name="<?php echo $item['name']?>"
                                            data-description="<?php echo $item['description']; ?>"
                                            data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
                                            data-locale="auto"
                                            data-currency="sgd"
                                            >
                                            </script>
                                          </form>
                                      </div>
                                    </center>
                                </div>
                          </div>
                    @endforeach
            </div>
        </div>
    </div>
</div>
@endsection
